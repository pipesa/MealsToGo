import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { MapsScreen } from "./src/features/maps/screens/maps.screen";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SettingsScreen } from "./src/features/settings/screens/settings.screen";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

function RestaurantsScreenNav() {
	return <RestaurantsScreen />;
}

function SettingsScreenNav() {
	return <SettingsScreen />;
}

function MapsScreenNav() {
	return <MapsScreen />;
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Settings: "md-settings",
	Maps: "md-map",
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) return null;

	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantsContextProvider>
					<NavigationContainer>
						<Tab.Navigator screenOptions={createScreenOptions}>
							<Tab.Screen
								name="Restaurants"
								component={RestaurantsScreenNav}
							/>
							<Tab.Screen
								name="Settings"
								component={SettingsScreenNav}
							/>
							<Tab.Screen name="Maps" component={MapsScreenNav} />
						</Tab.Navigator>
					</NavigationContainer>
				</RestaurantsContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
