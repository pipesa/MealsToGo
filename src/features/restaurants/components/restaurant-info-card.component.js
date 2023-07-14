import { Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { styled } from "styled-components/native";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer.component";

const CardTitle = styled(Text)`
	font-family: ${(props) => props.theme.fonts.heading};
`;

const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[2]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const CardAddress = styled(Text)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;

const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;

export const Icon = styled.Image`
	width: 15px;
	height: 15px;
`;

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
				<CardTitle>{name}</CardTitle>
				<Section>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
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
