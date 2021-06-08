import { AppBar, Badge, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {
    ChevronLeft as ChevronLeftIcon,
    FirstPage as FirstPageIcon,
    Home as HomeIcon,
    LastPage as LastPageIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    stretched: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    appBarOnDrawerOpen: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    },
    appBarOnDrawerClose: {

    },
    drawer: {
        whiteSpace: 'nowrap',
        flexShrink: 0,
    },
    drawerOpen: {
        width: drawerWidth,
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(7),
    },
    rightAligned: {
        textAlign: 'right',
    },
    centerAligned: {
        textAlign: 'center',
    },
    leftAligned: {
        textAlign: 'left',
    },
    hide: {
        display: 'none',
    },
    content: {
        flexGrow: 1,
        marginTop: theme.spacing(6),
        padding: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));

interface AppNavbarProps {
    title: string,
}
export const AppNavbar: React.FunctionComponent<AppNavbarProps> = ({ title, children }) => {
    //const history = useHistory();

    //const [updAnchorEL, setupdAnchorEL] = useState<HTMLElement | null>(null);
    const [isDraweOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => { setIsDrawerOpen(true) }
    const handleDrawerClose = () => { setIsDrawerOpen(false) }

    const css = useStyle();
    return (
        <div className={css.root}>
            <CssBaseline />
            <AppBar position="fixed"
                className={`${css.appBar} ${isDraweOpen && `${css.appBarOnDrawerOpen}`} `}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit"
                        className={isDraweOpen ? `${css.hide}` : ``}
                        onClick={handleDrawerOpen}
                    ><MenuIcon /></IconButton>
                    <Typography component="h1" variant="h6" noWrap>{title}</Typography>
                    <span className={css.stretched} />
                    <IconButton color="inherit">
                        <Badge badgeContent={1} color="secondary"><NotificationsIcon /></Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent"
                className={`${css.drawer} ${isDraweOpen ? css.drawerOpen : css.drawerClose}`}
                classes={{
                    paper: isDraweOpen ? css.drawerOpen : css.drawerClose
                }}>
                <div className={css.rightAligned}>
                    <IconButton onClick={handleDrawerClose}><ChevronLeftIcon /></IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button component={RouterLink} to={'/app'}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </List>
                <div className={css.stretched} />
                <Divider />
                <div className={css.leftAligned}>
                    <IconButton size="medium" onClick={isDraweOpen ? handleDrawerClose : handleDrawerOpen}>
                        {isDraweOpen ? <FirstPageIcon /> : <LastPageIcon />}
                    </IconButton>
                    <span className={css.stretched} />
                    {isDraweOpen && <Typography component="label" variant="caption">Version 0.1.0</Typography>}
                </div>
            </Drawer>
            <main className={css.content}>
                {children}
            </main>
        </div>
    )

};