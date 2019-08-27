#!/usr/bin/env python3
import requests
import json
import xml.etree.ElementTree as ET


class Subtitles(object):

    """videoId + lang1 + lang2 -->

        [{
            "start":float (seconds),
            "end":float (seconds),
            "{lang1}_sub":string,
            "{lang2}_sub":string
         },
            ...
        ]
    """

    def __init__(self, videoId, primaryLang, secondaryLang):
        self.videoId = videoId
        self.primaryLang = primaryLang
        self.secondaryLang = secondaryLang
        self.subtitles = self.parseSubtitles()

    def downloadSubtitles(self):
        """Returns XML subtitles as a string"""

        primary_address = 'https://www.youtube.com/api/timedtext?' \
            + f'lang={self.primaryLang}&v={self.videoId}'
        secondary_address = primary_address \
            + f'&tlang={self.secondaryLang}'

        primary_xml = requests.get(primary_address).text
        secondary_xml = requests.get(secondary_address).text

        return primary_xml, secondary_xml

    def parseSubtitles(self):
        """Parses 2 subtitle tracks to return a combined JSON format"""

        primary, secondary = self.downloadSubtitles()
        xml = {'primary': primary, 'secondary': secondary}
        json_subs = {}
        for name, xml_data in xml.items():
            root = ET.XML(xml_data)
            entry = {}
            for i in range(len(root)):
                entry["start"] = root[i].attrib['start']
                entry["end"] = float(entry["start"])\
                    + float(root[i].attrib['dur'])
                entry["primary_subtitle"] = root[i].text

                if name == 'primary':
                    json_subs[i] = entry
                else:

                    json_subs[i]["secondary_subtitle"] = root[i].text

                entry = {}

        return json_subs

    def writeToFile(self):
        """Writes combined subtitles to file as
        a javascript variable (var x)"""

        with open(f'{self.videoId}_{self.primaryLang}_{self.secondaryLang}_subtitles.js', 'w') as f:
            declare = "var captions = "
            f.write(declare)
            f.write(json.dumps(self.subtitles, indent=4))
            ending = "export default captions;"
            f.write("\n")
            f.write("\n")
            f.write(ending)


if __name__ == '__main__':
    # test that start/end times aren't overlapping
    # ..types are correct
    # the number of subs in each track matches the number in combined track
    test = Subtitles('ipmspCjAA4M', 'es', 'en')
    test.writeToFile()
