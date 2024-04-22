import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const EventDetailScreen = () => {
  const route = useRoute();

  const { eventId, title, description } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 20 }}>EventDetailScreen for {eventId}</Text>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text style={{ fontSize: 20 }}>{description}</Text>
    </View>
  );
};

export default EventDetailScreen;
