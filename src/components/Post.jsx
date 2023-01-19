import React from "react";
import {
	Favorite,
	FavoriteBorder,
	MoreVertOutlined,
	Share,
} from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";

const Post = () => {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
						S
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertOutlined />
					</IconButton>
				}
				title="Silly Guy"
				subheader="September 14, 2020"
			/>
			<CardMedia
				component="img"
				height="20%"
				image="https://i.ytimg.com/vi/627Lrq8g6lA/sddefault.jpg"
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Immersive shot capturing this lovely home. Please like and subsribe for more realistic photography.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: "red" }} />}
					/>
				</IconButton>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
