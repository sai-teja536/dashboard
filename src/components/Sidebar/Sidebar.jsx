import "./sidebar.scss"
import SortIcon from '@mui/icons-material/Sort';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ReportIcon from '@mui/icons-material/Report';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HelpIcon from '@mui/icons-material/Help';
import SportsIcon from '@mui/icons-material/Sports';

function Sidebar(){
    return(
     <div className="side">
        <SortIcon className="filtericon"/>
        <div className="center" >
            <ul>
                <li>
                    <div className="obj"><div className="icon"><DashboardIcon /></div> <span>Dashboard</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><LibraryBooksIcon /></div> <span>Catalog</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><InventoryIcon /></div> <span>Inventory</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><SportsIcon /></div> <span>Advertising</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><EmojiObjectsIcon /></div> <span>Product<br /> Intelligence</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><QueryStatsIcon /></div> <span>Forecasting</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><ReportGmailerrorredIcon /></div> <span>Report Central</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><ReportIcon /></div> <span>Reports</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><GroupAddIcon /></div> <span>Link Accounts</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><SettingsSuggestIcon /></div> <span>Settings</span></div>
                </li>
                <li>
                    <div className="obj"><div className="icon"><HelpIcon /></div> <span>Help</span></div>
                </li>

            </ul>
        </div>
     </div>
    )
}

export default Sidebar