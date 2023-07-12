import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
		<Card style={styles.card}>
			<Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
			<Card.Title title={name} />
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
	},
	cover: {
		padding: 10,
		backgroundColor: "white",
	},
});
