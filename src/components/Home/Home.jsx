import Sidebar from '../Sidebar/Sidebar';
import Desc from '../Desc/desc';
import Main from "../Main/Main";
import './home.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
function Home(){
    return(
        <>
        <div className="home">
            <h1 className="title"><PermIdentityIcon /></h1>
        </div><></>
        <div className='home1'>
          <Sidebar/>
           <div className="container">
            <Desc />
            <Main />
           </div>
        </div>
        </>
    )
}

export default Home