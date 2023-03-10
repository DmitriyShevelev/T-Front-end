import { AppBar, Box, Container, Drawer, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { FC, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { RouteType } from '../../models/common/route-type';


function getActiveLabel(path: string, items: RouteType[]): string {
    if (path !== '/') {
        const res = items.filter(item => item.path === path); 
        return res.length !== 0 ? res[0].label : 'Page does not exist';
    }
    return items.length > 0 ? items[0].label : 'Routes is empty';
}

function getInitialActiveTabIndex(path: string, items: RouteType[]): number {
    let res = items.findIndex(item => path === item.path);
    return res < 0 ? 0 : res;

}

const NavigatorDrawer: FC<{ items: RouteType[] }> = ({ items }) => {

    const path = useLocation().pathname;

    const [label, setLabel] = useState(getActiveLabel(path, items));
    const [activeTabIndex, setActiveTab] = useState(getInitialActiveTabIndex(path, items));

    document.title = label;

    const [displayDrawer, setStateDrawer] = useState(false);

    const showDrawer = () => {
        setStateDrawer(true);
    }

    const closeDrawer = () => {
        setStateDrawer(false);
    }

    function onChangeHandler(event: React.SyntheticEvent, newValue: number) {
        setActiveTab(newValue);
    }

    const getTabs = (orientation: "vertical" | "horizontal") => (
        <Tabs
            orientation={orientation}
            variant="scrollable"
            value={activeTabIndex}
            onChange={onChangeHandler}
        >
            {items.map((item, index) => (
                <Tab
                    key={item.label}
                    component={Link}
                    to={item.path}
                    label={item.label}
                    onClick={() => setLabel(item.label)}
                />
            ))}
        </Tabs>
    );

    return (
        <Toolbar disableGutters sx={{backgroundColor: 'aqua'}}>
            <Box>
                <Toolbar>
                    <IconButton
                        onClick={showDrawer}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, flexGrow: '1' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer
                    anchor='left'
                    open={displayDrawer}
                    onClose={closeDrawer}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={closeDrawer}
                        aria-label="Mobile menu"
                    >
                        {getTabs('vertical')}
                    </Box>
                </Drawer>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    textAlign: 'center',
                    flexGrow: '1'
                }}
            >
                {label}
            </Typography>
        </Toolbar>
    );
};

export default NavigatorDrawer;