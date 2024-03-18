import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import Home from "../screens/Home";
import MapScreen from "../screens/MapScreen";
import CommentsScreen from "../screens/CommentsScreen";
import { useEffect, useState } from "react";
import { authStateChanged } from "../services/authentication";

const MainStack = createStackNavigator();

const AppNavigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authStateChanged(setUser);
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={user ? "Home" : "Login"}>
        {!user && (
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        )}
        {!user && (
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
        {user && (
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
        {user && (
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: "Мапа",
              headerTitleAlign: "center",
              headerStyle: {
                boxShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.3)",
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 1,
              },
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                fontSize: 17,
                lineHeight: 22,
              },
            }}
          />
        )}
        {user && (
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              title: "Коментарі",
              headerTitleAlign: "center",
              headerStyle: {
                boxShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.3)",
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 1,
              },
              headerTintColor: "#212121",
              headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                fontSize: 17,
                lineHeight: 22,
              },
            }}
          />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
