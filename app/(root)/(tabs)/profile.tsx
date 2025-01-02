import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useAppContext } from "@/lib/useContext";
import { settings } from "@/constants/data";

const SettingItem = ({
  title,
  icon,
  onPress,
  textStyle,
  showArrow = true,
}: {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-4 border-b border-gray-100 "
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-5"></Image>
        <Text className={`text-lg font-medium text-black-300 ${textStyle}`}>
          {title}
        </Text>
      </View>

      {showArrow && (
        <Image source={icons.rightArrow} className="size-5"></Image>
      )}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    // Logout the user
    setUser(null);
  };

  return (
    <SafeAreaView className="h-full bg-white p-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 7 }}
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-bold">Profile</Text>
          <Image source={icons.bell} className="size-5"></Image>
        </View>
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44  relative rounded-full"
            ></Image>
            <TouchableOpacity className="absolute right-2 bottom-9 ">
              <Image source={icons.edit} className="size-9"></Image>
            </TouchableOpacity>
            <Text className="text-2xl font-bold">{user?.name}</Text>
          </View>
        </View>
        <View className="flex flex-col mt-5">
          <SettingItem icon={icons.calendar} title={"My Booking"}></SettingItem>
          <SettingItem icon={icons.wallet} title={"Payments"}></SettingItem>
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingItem
            icon={icons.logout}
            title={"Logout"}
            onPress={handleLogout}
            textStyle="text-red-500"
            showArrow={false}
          ></SettingItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
