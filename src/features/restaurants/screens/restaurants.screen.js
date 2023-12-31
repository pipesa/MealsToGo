import { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { styled } from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);
	console.log(error);
	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading
						animating={true}
						color={MD2Colors.pink500}
						size={50}
					/>
				</LoadingContainer>
			)}
			<Search />
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => {
					return (
						<Spacer position="bottom" size="large">
							<RestaurantInfoCard restaurant={item} />
						</Spacer>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
