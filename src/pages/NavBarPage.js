import NavBar from "../components/NavBar";

function NavBarPage() {
    const items = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Books',
            path: '/books',
        },
        {
            label: 'Songs',
            path: '/songs',
        },
    ]

    return (
            <NavBar items={items}/>
    )
};

export default NavBarPage;