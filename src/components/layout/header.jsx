import '../layout/styles/header.css'
const Header = () => {
    return (
        <div className="header">
            <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/product">Product</a></li>
        </ul>
        </div>
    )

}
export default Header