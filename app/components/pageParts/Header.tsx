export function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pradzia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Kontaktai</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;