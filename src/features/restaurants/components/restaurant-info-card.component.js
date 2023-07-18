import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
	CardAddress,
	CardCover,
	Icon,
	Info,
	Rating,
	RestaurantCard,
	Section,
	SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Sophie Hansen",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ovNj5bpFI5qebXe2zOS5k9Hy1yHH_z-txp4OP-qMFJE7j8br2vPbDyyTXfI0LTW86Gw&usqp=CAU",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
		placeId,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={5}>
			<CardCover source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, i) => (
							<SvgXml
								key={`star-${placeId}-${i}`}
								xml={star}
								width={20}
								height={20}
							/>
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant="error">CLOSED TEMPORARILY</Text>
						)}
						<Spacer position="left" size="large">
							{isOpenNow && (
								<SvgXml xml={open} width={20} height={20} />
							)}
						</Spacer>
						<Spacer position="left" size="large">
							<Icon source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<CardAddress>{address}</CardAddress>
			</Info>
		</RestaurantCard>
	);
};
