import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alightItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alightItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					EDEV
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search here..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images-platform.99static.com//5_oXjjUVqCOk-6snmE7s_cdr-dI=/229x0:1041x812/fit-in/590x590/99designs-contests-attachments/47/47482/attachment_47482097"
						onClick={(e) => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={(e) => setOpen(true)}>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images-platform.99static.com//5_oXjjUVqCOk-6snmE7s_cdr-dI=/229x0:1041x812/fit-in/590x590/99designs-contests-attachments/47/47482/attachment_47482097"
					/>
					<Typography variant="span">Pablo</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
