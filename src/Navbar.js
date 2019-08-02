class Navbar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="./logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' React Bootstrap'}
                </Navbar.Brand>
            </Navbar>
        );
    }
}
