import { Text } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components/native";

const CardTitle = styled(Text)`
	padding: ${(props) => props.theme.space[3]};
	font-family: ${(props) => props.theme.fonts.body};
`;

const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[2]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
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
			<CardTitle>{name}</CardTitle>
		</RestaurantCard>
	);
};
