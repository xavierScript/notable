import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CheckBox from "@react-native-community/checkbox";
// import { useFonts } from "expo-font"; // Import the useFonts hook

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

const CreateAccountScreen: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleInputChange = (
    field: keyof FormState,
    value: string | boolean
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Create account</Text>
        </View>

        <View style={styles.form}>
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <FeatherIcon name="user" size={20} style={styles.inputIcon} />
            <TextInput
              clearButtonMode="while-editing"
              onChangeText={(name) => handleInputChange("name", name)}
              placeholder="Your name"
              placeholderTextColor="#6b7280"
              style={styles.input}
              value={form.name}
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <FeatherIcon name="mail" size={20} style={styles.inputIcon} />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={(email) => handleInputChange("email", email)}
              placeholder="Enter email"
              placeholderTextColor="#6b7280"
              style={styles.input}
              value={form.email}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <FeatherIcon name="lock" size={20} style={styles.inputIcon} />
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(password) =>
                handleInputChange("password", password)
              }
              placeholder="Enter password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              style={styles.input}
              value={form.password}
            />
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <FeatherIcon name="lock" size={20} style={styles.inputIcon} />
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(confirmPassword) =>
                handleInputChange("confirmPassword", confirmPassword)
              }
              placeholder="Repeat password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              style={styles.input}
              value={form.confirmPassword}
            />
          </View>

          {/* Terms and Conditions */}
          {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={form.agreedToTerms}
              onValueChange={(value) =>
                handleInputChange("agreedToTerms", value)
              }
            />
            <Text style={styles.checkboxText}>
              I agree with notable's{" "}
              <Text style={styles.linkText}>Terms and Conditions</Text>.
            </Text>
          </View> */}

          {/* Create Account Button */}
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Social Login */}
          <View style={styles.socialContainer}>
            <FontAwesome
              name="facebook"
              size={30}
              color="#4267B2"
              style={styles.socialIcon}
            />
            <FontAwesome
              name="google"
              size={30}
              color="#EA4335"
              style={styles.socialIcon}
            />
            <FontAwesome
              name="apple"
              size={30}
              color="#000000"
              style={styles.socialIcon}
            />
          </View>

          {/* Login Link */}
          <TouchableOpacity>
            <Text style={styles.formFooter}>
              Already have an account?{" "}
              <Text style={styles.formFooterLink}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // fontFamily: "Urban",
  },
  header: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1D2A32",
  },
  form: {
    paddingHorizontal: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
    color: "#000",
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#000",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6b7280",
  },
  linkText: {
    color: "#1D4ED8",
    textDecorationLine: "underline",
  },
  createButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 24,
    alignItems: "center",
    marginVertical: 28,
    maxWidth: 200,
    marginHorizontal: "auto",
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 28,
  },
  socialIcon: {
    marginHorizontal: 45,
  },
  formFooter: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  formFooterLink: {
    color: "#000",
    textDecorationLine: "underline",
  },
});

export default CreateAccountScreen;
