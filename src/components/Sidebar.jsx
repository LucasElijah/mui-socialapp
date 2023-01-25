import {
	Article,
	Brightness6,
	ConnectWithoutContact,
	Home,
	Portrait,
	SportsKabaddi,
	Storefront,
	Tune,
} from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from "@mui/material";
import React from "react";

/* Sidebar + Buttons/Icons */
const Sidebar = ({mode, setMode}) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed">
				<List>
					{/* Home */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary="Homepage" />
						</ListItemButton>
					</ListItem>
					{/* Pages */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#pages">
							<ListItemIcon>
								<Article />
							</ListItemIcon>
							<ListItemText primary="Pages" />
						</ListItemButton>
					</ListItem>
					{/* Groups */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#groups">
							<ListItemIcon>
								<ConnectWithoutContact />
							</ListItemIcon>
							<ListItemText primary="Groups" />
						</ListItemButton>
					</ListItem>
					{/* Marketplace */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#marketplace">
							<ListItemIcon>
								<Storefront />
							</ListItemIcon>
							<ListItemText primary="Marketplace" />
						</ListItemButton>
					</ListItem>
					{/* Friends */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#friends">
							<ListItemIcon>
								<SportsKabaddi />
							</ListItemIcon>
							<ListItemText primary="Friends" />
						</ListItemButton>
					</ListItem>
					{/* Settings */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#setting">
							<ListItemIcon>
								<Tune />
							</ListItemIcon>
							<ListItemText primary="Settings" />
						</ListItemButton>
					</ListItem>
					{/* Profile */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#profile">
							<ListItemIcon>
								<Portrait />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItemButton>
					</ListItem>
					{/* DarkMode */}
					<ListItem disablePadding>
						<ListItemButton component="a" href="#profile">
							<ListItemIcon>
								<Brightness6 />
							</ListItemIcon>
							<Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
						</ListItemButton>
						{/* <ListItemButton component="a" href="#profile">
							<ListItemIcon>
								<Brightness6 />
							</ListItemIcon>
							<Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
						</ListItemButton> */}
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
