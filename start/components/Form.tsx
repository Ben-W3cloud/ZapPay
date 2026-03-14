import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Animated, { FadeIn } from "react-native-reanimated";

export default function AuthForm() {

  // Toggle between SIGNIN and SIGNUP
  const [isSignup, setIsSignup] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  // Handle text input changes
  const handleChange = (name: any, value: any) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Handle form submit
  const handleSubmit = () => {

    // Basic validation for signup
    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 👇 CONNECT YOUR BACKEND HERE
    console.log("Submitted Data:", formData);

  };


  return (

    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>
        {isSignup ? "Create Account" : "Welcome Back"}
      </Text>


      {/* USERNAME */}
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={formData.username}
        onChangeText={(text) => handleChange("username", text)}
      />


      {/* EMAIL (Signup only) */}
      {isSignup && (
        <Animated.View entering={FadeIn.duration(400)}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </Animated.View>
      )}


      {/* PASSWORD */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
      />


      {/* CONFIRM PASSWORD (Signup only) */}
      {isSignup && (
        <Animated.View entering={FadeIn.duration(400)}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(text) =>
              handleChange("confirmPassword", text)
            }
          />
        </Animated.View>
      )}


      {/* SUBMIT BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>


      {/* TOGGLE SIGNIN/SIGNUP */}
      <TouchableOpacity
        onPress={() => setIsSignup(!isSignup)}
      >
        <Text style={styles.switchText}>
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#0f172a"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
    textAlign: "center"
  },

  input: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },

  switchText: {
    marginTop: 20,
    textAlign: "center",
    color: "#60a5fa"
  }

});