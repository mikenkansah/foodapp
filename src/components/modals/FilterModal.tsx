import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, Image } from "react-native";
import Button from "../Button";
import { FONT_REGULAR } from "../../constants/Dimensions";

interface ModalProps {
  isOpen: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}
const FilterModal = ({ isOpen, setModalVisible }: ModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View className="flex-row justify-between items-center">
            <Text style={styles.modalText}>Filter your search</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <View
                className="w-10 h-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "#ECF0F4" }}
              >
                <Image source={require("../../assets/Close.png")} />
              </View>
            </Pressable>
          </View>

          <View className="mt-6">
            <Text className="uppercase" style={FONT_REGULAR}>
              offers
            </Text>
            <View className="flex-row flex-wrap gap-2  items-center mt-4 mb-4">
              {[
                "Delivery",
                "Pick Up",
                "Offer",
                "Momo",
                "Online payment",
                "Payment On Delivery",
              ].map((item, i) => (
                <Pressable key={i} onPress={() => {}}>
                  <View className="border-1  border border-[#EDEDED] rounded-full ">
                    <Text
                      className="text-[#464E57] text-[15px] py-1.5 px-4"
                      style={FONT_REGULAR}
                    >
                      {item}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
          <View className="mt-4">
            <Text className="uppercase" style={FONT_REGULAR}>
              Delivery Time
            </Text>
            <View className="flex-row flex-wrap gap-2  items-center mt-4 mb-4">
              {["10-15 min", "20 min", "30 min", "30-45 min", "45-60 min"].map(
                (item, i) => (
                  <Pressable key={i} onPress={() => {}}>
                    <View className="bg-[#F58D1D] rounded-full border-none ">
                      <Text
                        className="text-white text-[15px] py-1.5 px-4"
                        style={FONT_REGULAR}
                      >
                        {item}
                      </Text>
                    </View>
                  </Pressable>
                )
              )}
            </View>
          </View>

          <View className="mt-4">
            <Text className="uppercase" style={FONT_REGULAR}>
              Pricing
            </Text>
            <View className="flex-row flex-wrap gap-2  items-center mt-4 mb-4">
              {["10-15 min", "20 min", "30 min", "30-45 min", "45-60 min"].map(
                (item, i) => (
                  <Pressable key={i} onPress={() => {}}>
                    <View className="bg-[#F58D1D] w-10 h-10 rounded-full items-center justify-center border-none ">
                      <Text
                        className="text-white text-[15px]"
                        style={FONT_REGULAR}
                      >
                        $$
                      </Text>
                    </View>
                  </Pressable>
                )
              )}
            </View>
          </View>

          <View className="mt-4">
            <Text className="uppercase" style={FONT_REGULAR}>
              rating
            </Text>
            <View className="flex-row flex-wrap gap-2  items-center mt-4 mb-4">
              {["10-15 min", "20 min", "30 min", "30-45 min", "45-60 min"].map(
                (item, i) => (
                  <Pressable key={i} onPress={() => {}}>
                    <View className="border-1  border border-[#EDEDED] w-10 h-10 rounded-full items-center justify-center border-none ">
                      <Image
                        source={require("../../assets/Star.png")}
                        className="w-4 h-4"
                        resizeMode="contain"
                      />
                    </View>
                  </Pressable>
                )
              )}
            </View>
          </View>
          <View className=" w-full mt-6 mb-2">
            <Button onHandleEvent={() => {}}>Filter</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(73, 83, 98, 0.53)", // semi-transparent black

    opacity: 25,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    width: "90%",
    // height: "80%",
    opacity: 75,
    position: "relative",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    borderRadius: 8,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    fontFamily: "Sen-Regular",
    color: "#181C2E",
    fontSize: 17,
    // textAlign: "center",
  },
});
