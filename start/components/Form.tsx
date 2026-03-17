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
import { useTheme } from '@/hooks/useTheme';

interface AuthFormProps {
  mode: "signin" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {

  const { colors } = useTheme();

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

    <View style={[styles.container, { backgroundColor: colors.background }] }>

      <Text style={[styles.title, { color: colors.text }]}>
        {mode === "signup" ? "Create Account" : "Welcome Back"}
      </Text>


      {/* Username */}
      <TextInput
        placeholder="Username"
        placeholderTextColor={colors.textTertiary}
        style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
        value={formData.username}
        onChangeText={(text) => handleChange("username", text)}
      />


      {/* Email */}
      {mode === "signup" && (
        <Animated.View entering={FadeIn.duration(400)}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.textTertiary}
            style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </Animated.View>
      )}


      {/* Password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.textTertiary}
        secureTextEntry
        style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
      />


      {/* Confirm Password */}
      {mode === "signup" && (
        <Animated.View entering={FadeIn.duration(400)}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.textTertiary}
            secureTextEntry
            style={[styles.input, { backgroundColor: colors.surface, color: colors.text }]}
            value={formData.confirmPassword}
            onChangeText={(text) =>
              handleChange("confirmPassword", text)
            }
          />
        </Animated.View>
      )}


      {/* Submit */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.accent }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: colors.background }]}>
          {mode === "signup" ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>


      {/* Toggle */}
      <TouchableOpacity onPress={toggleText}>
        <Text style={[styles.switchText, { color: colors.textSecondary }]}>
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
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center"
  },

  input: {
    padding: 14,
    borderRadius: 10,
    marginVertical: 22,
    borderWidth: 1,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold"
  },

  switchText: {
    marginTop: 20,
    textAlign: "center",
  }

});