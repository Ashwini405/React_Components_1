function Header(){
    return <div>
        <header style={{ background: "#f8f8f8", padding: "15px 50px", display:"flex", justifyContent: "space-around",alignItems: "center", }}>
        <h1> Freeze Delight</h1>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "25px" }}>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
        
}
export default Header