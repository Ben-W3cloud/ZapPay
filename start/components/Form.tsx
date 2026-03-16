import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";

interface AuthFormProps {
  mode: "signin" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {

  const router = useRouter();

        //function for the buttons
        const toggleText = () => {         
        if (mode === "signup") {
                    router.push("/(auth)/login");
        }
        else if (mode === "signin") {
            router.push("/(auth)/register")
        }
        else {
            console.log("CONTACT THE BLOODY DEV");
        }
    }

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
        if (mode === "signup" && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
        }

        // backend shii later         
        console.log("Submitted Data:", formData);
        router.push("/(tabs)");
    };


  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        {mode === "signup" ? "Create Account" : "Welcome Back"}
      </Text>


      {/* Username */}
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={formData.username}
        onChangeText={(text) => handleChange("username", text)}
      />


      {/* Email */}
      {mode === "signup" && (
        <Animated.View entering={FadeIn.duration(400)}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </Animated.View>
      )}


      {/* Password */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
      />


      {/* Confirm Password */}
      {mode === "signup" && (
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


      {/* Submit */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          {mode === "signup" ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>


      {/* Toggle */}
      <TouchableOpacity onPress={toggleText}>
        <Text style={styles.switchText}>
          {mode ==="signup"
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>

    </View>

  );
};

export default AuthForm;

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
    marginVertical: 22
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