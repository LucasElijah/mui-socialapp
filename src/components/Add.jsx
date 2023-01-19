import {
	styled,
	Fab,
	Modal,
	Tooltip,
	Typography,
	Avatar,
	TextField,
	Stack,
	Button,
	ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import {
	Add as AddIcon,
	EmojiEmotions,
	Image,
	PersonAdd,
	SaveAs,
	VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
	display: "flex",
	alighItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alighItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

// const StyledButton = styled(Button)`
// 	background-color: grey;
// 	color: #fff;
// 	padding: 6px 12px;
// 	&:hover {
// 		background-color: #a9a9a9;
// 	}
// 	&:focus {
// 		background-color: green;
// 	}
// `;

const StyledButton = styled(Button)({
	backgroundColor: "Green",
	width: "100px",
	"&:hover": {
		backgroundColor: "darkGreen",
	},
});

const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title="Create"
				sx={{
					position: "fixed",
					bottom: 20,
					left: { xs: "calc(50% - 25px)", md: 30 },
				}}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={350}
					height={250}
					bgcolor={"background.default"}
					color={"text.primary"}
					p={4}
					borderRadius={6}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>
					<UserBox>
						<Avatar
							src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							sx={{ width: 30, height: 30 }}
						/>
						<Typography fontWeight={500} variant="span">
							John Doe
						</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="Enter Text Here..."
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>Post</Button>
						<StyledButton /* sx={{ width: "100px", backgroundColor: "green" }} */
						>
							<SaveAs />
						</StyledButton>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
