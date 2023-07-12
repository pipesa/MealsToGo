import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
	<SafeAreaView style={styles.container}>
		<View style={styles.search}>
			<Searchbar />
		</View>
		<View style={styles.list}>
			<RestaurantInfoCard />
		</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		padding: 16,
	},
	list: {
		backgroundColor: "yellow",
		flex: 1,
		padding: 16,
	},
});
