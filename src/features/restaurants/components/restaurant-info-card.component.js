import { Card } from "react-native-paper";
import { styled } from "styled-components/native";

const CardTitle = styled(Card.Title)`
	padding: 16px;
`;

const CardCover = styled(Card.Cover)`
	padding: 10px;
	background-color: white;
`;

const RestaurantCard = styled(Card)`
	background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Sophie Hansen",
		icon,
		photos = [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ovNj5bpFI5qebXe2zOS5k9Hy1yHH_z-txp4OP-qMFJE7j8br2vPbDyyTXfI0LTW86Gw&usqp=CAU",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;
	return (
		<RestaurantCard>
			<CardCover source={{ uri: photos[0] }} />
			<CardTitle title={name} />
		</RestaurantCard>
	);
};
