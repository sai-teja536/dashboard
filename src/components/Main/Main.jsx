import "./main.scss";
import React, { PureComponent } from 'react';
import {
    ComposedChart,
    LineChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

import { DataGrid } from '@mui/x-data-grid';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
    },
];

const columns = [
    { field: 'Status', headerName: 'Status', width: 70,Cell:(props)=>(<img src={<PlayCircleOutlineIcon />} />) },
    { field: 'CampaignName', headerName: 'Campaign Name', width: 200 },
    { field: 'Info', headerName: 'Info', width: 70 },
    { field: 'Automation', headerName: 'Automation', width: 70 },
    { field: 'Dayparting', headerName: 'Dayparting', width: 70 },
    { field: 'Budget', headerName: 'Budget', width: 70 },
    { field: 'BuildingStrategy', headerName: 'Building Strategy', width: 150 },
    { field: 'Spend', headerName: 'Spend', width: 70 },
    { field: 'Revenue', headerName: 'Revenue', width: 70 },
    { field: 'CurrentBid', headerName: 'Current Bid', width: 70 },
    { field: 'ACOS', headerName: 'ACOS', width: 70 },
    {
        field: 'Orders',
        headerName: 'Orders',
        type: 'number',
        width: 90,
    },
    { field: 'Impression', headerName: 'Impression', width: 70 },
    { field: 'CTR', headerName: 'CTR', width: 70 },
    { field: 'ConvRate', headerName: 'Conv Rate', width: 70 },
    { field: 'Report', headerName: '', width: 70 },
    { field: 'dots', headerName: '', width: 70 },
];

const rows = [
    { id: 1, Status:<PlayCircleOutlineIcon />, CampaignName: 'Maxima Twin', Info: 'a', Automation: 'a', Dayparting: 'a', Budget: '$7,099', BuildingStrategy: 'Up & Down', Spend: '$7099', Revenue: '$7,099', CurrentBid: '$9', ACOS: '298%', Orders: 34, Impression: '4.5K', CTR: '4.5K', ConvRate: '1.5%', Report: 'Report', dots: ':' },
    { id: 2, Status:<PlayCircleOutlineIcon />, CampaignName: 'Alpha Bed Frames', Info: 'a', Automation: 'a', Dayparting: 'a', Budget: '$12,805', BuildingStrategy: 'Up & Down', Spend: '$12,805', Revenue: '$12,805', CurrentBid: '$9', ACOS: '145%', Orders: 453, Impression: '12K', CTR: '12K', ConvRate: '4.5%', Report: 'Report', dots: ':' },
    { id: 3, Status:<PlayCircleOutlineIcon />, CampaignName: 'Mattress', Info: 'a', Automation: 'a', Dayparting: 'a', Budget: '$57,804', BuildingStrategy: 'Up', Spend: '$57,804', Revenue: '$57,804', CurrentBid: '$9', ACOS: '569.45%', Orders: 35, Impression: '4.6K', CTR: '4.6K', ConvRate: '5.5%', Report: 'Report', dots: ':' },
    { id: 4, Status:<PlayCircleOutlineIcon />, CampaignName: 'Bamboo Toppers', Info: 'a', Automation: 'a', Dayparting: 'a', Budget: '$7,209', BuildingStrategy: 'Down', Spend: '$7,209', Revenue: '$7,209', CurrentBid: '$9', ACOS: '225%', Orders: 35, Impression: '3.64K', CTR: '3.64K', ConvRate: '9.5%', Report: 'Report', dots: ':' },
 
];



export default class Main extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';
    render() {
        return (
            <>
                <div className="main">
                    <div className="main1">
                        <div className="graph1">
                            <span style={{fontWeight:"bold",fontSize:"20px",fontFamily:"sans-serif"}}>Ads Spends & Returns</span><hr></hr>
                            <div className="stocks">
                                <span className="ad">
                                    Ads Speed<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>&#36;14.5K</span> <span className="ico"><CallReceivedIcon sx={{fontSize:"10px"}}/></span>19.9%
                                </span>
                                <span className="ad">
                                    Revenue<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>&#36;1.8M</span> <span className="ico" style={{backgroundColor:"green"}}><CallMadeIcon sx={{fontSize:"10px"}}/></span>9.9%
                                </span>
                                <span className="ad">
                                    CPC<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>&#36;0.95</span> <span className="ico"><CallReceivedIcon sx={{fontSize:"10px"}} /></span>18.9%
                                </span>
                                <span className="ad">
                                    ACOS<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>51.8%</span> <span className="ico" style={{backgroundColor:"green"}}><CallMadeIcon sx={{fontSize:"10px"}} /></span>6.8%
                                </span>
                            </div><hr></hr>
                            <div style={{ height: "25vh", width: "25vw" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <ComposedChart
                                        width={40}
                                        height={40}
                                        data={data}
                                        margin={{
                                            top: 20,
                                            right: 20,
                                            bottom: 20,
                                            left: 20,
                                        }}
                                    >
                                        <CartesianGrid stroke="#f5f5f5" />
                                        <XAxis dataKey="name" scale="band" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>

                        </div>
                        <div className="graph1">
                            <span style={{fontWeight:"bold",fontSize:"20px",fontFamily:"sans-serif"}}>Click Through Rate & Clicks</span><hr></hr>
                            <div className="stocks">
                            <span className="ad">
                                    Impression<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>10.5M</span> <span className="ico"><CallReceivedIcon sx={{fontSize:"10px"}}/></span>19.9%
                            </span>
                            <span className="ad">
                                    Clicks<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>10.5K</span> <span className="ico" style={{backgroundColor:"green"}}><CallMadeIcon sx={{fontSize:"10px"}}/></span>9.9%
                            </span>
                            <span className="ad">
                                    CTR<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>0.16%</span> <span className="ico" style={{backgroundColor:"green"}}><CallMadeIcon sx={{fontSize:"10px"}}/></span>9.9%
                            </span>
                            </div><hr></hr>
                            <div style={{ height: "25vh", width: "25vw" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                        </div>
                        <div className="graph1">
                        <span style={{fontWeight:"bold",fontSize:"20px",fontFamily:"sans-serif"}}>Conversation Rsare & Order</span><hr></hr>
                            <div className="stocks">
                            <span className="ad">
                                    CVR<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>5.3%</span> <span className="ico"><CallReceivedIcon sx={{fontSize:"10px"}}/></span>19.9%
                            </span>
                            <span className="ad">
                                    Orders<br></br>
                                    <span style={{border:0,fontSize:"18px",fontWeight:"bold"}}>10K</span> <span className="ico" style={{backgroundColor:"green"}}><CallMadeIcon sx={{fontSize:"10px"}}/></span>9.9%
                            </span>
                            </div><hr></hr>
                            <div style={{ height: "25vh", width: "25vw" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                        </div>
                    </div>
                    <div className="main2" style={{backgroundColor:"rgb(230,227,227)"}}>
                        <span style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"22px",marginBottom:"25px"}}>All Campaign</span><br /><br />
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 20]}
                                checkboxSelection
                                style={{backgroundColor:"white",marginBottom:"30px"}}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
