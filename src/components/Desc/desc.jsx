import "./desc.scss";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import { DemoContainer, DemoItem } from '@mui/x-date-pickers';
//import { AdapterDayjs } from '@mui/x-date-pickers';
//import LocalizationProvider  from '@mui/x-date-pickers';

//import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function Desc() {
    const [ads, setAds] = useState('');

    const handleChange = (event) => {
        setAds(event.target.value);
    };
    return (
        <div className="desc">
            <div className="desc1">
                <span>Advertising</span><br /><br />
                <div className="desc2">
                    <span>
                        Marketplace<br />
                        <FormControl sx={{ m: 0, minWidth: 220}} size="small">
                            <InputLabel id="demo-simple-select-label">Ads</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ads}
                                label="Age"
                                onChange={handleChange}
                                width="100px"
                                height="90px"
                            >
                                <MenuItem value={10}>Amazon</MenuItem>
                                <MenuItem value={20}>Myntra</MenuItem>
                                <MenuItem value={30}>Flipkart</MenuItem>
                            </Select>
                        </FormControl>
                    </span>
                    <span>
                        Ad type<br />
                        <FormControl sx={{ m: 0, minWidth: 220}} size="small">
                            <InputLabel id="demo-simple-select-label">All</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ads}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Television</MenuItem>
                                <MenuItem value={20}>Direct Marketing</MenuItem>
                                <MenuItem value={30}>Magazine</MenuItem>
                            </Select>
                        </FormControl>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Desc;