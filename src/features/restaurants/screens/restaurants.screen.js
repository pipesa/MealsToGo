import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { styled } from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantContainer = styled(View)`
	flex: 1;
	background-color: ${(props) => props.theme.colors.bg.primary};
	padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
	<SafeArea>
		<SearchContainer>
			<Searchbar />
		</SearchContainer>
		<RestaurantContainer>
			<RestaurantInfoCard />
		</RestaurantContainer>
	</SafeArea>
);
