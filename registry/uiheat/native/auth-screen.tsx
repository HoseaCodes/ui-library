import * as React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";

import { authErrorMessage, useAuth } from "@/components/auth/auth-provider";
import { radius, useTheme, type ThemeColors } from "@/lib/theme";

export type AuthMode = "sign-in" | "sign-up" | "reset";

export interface AuthScreenProps {
  mode: AuthMode;
  /** Navigate to another auth screen (works with Expo Router or React Navigation). */
  onSwitchMode?: (mode: AuthMode) => void;
  /** Called after a successful sign in / sign up, e.g. router.replace("/"). */
  onSuccess?: () => void;
  /** App name or logo above the form. */
  header?: React.ReactNode;
}

const COPY: Record<AuthMode, { title: string; subtitle: string; submit: string }> = {
  "sign-in": { title: "Welcome back", subtitle: "Sign in to your account", submit: "Sign in" },
  "sign-up": { title: "Create an account", subtitle: "It takes less than a minute", submit: "Create account" },
  reset: { title: "Reset your password", subtitle: "We'll email you a reset link", submit: "Send reset link" },
};

export function AuthScreen({ mode, onSwitchMode, onSuccess, header }: AuthScreenProps) {
  const auth = useAuth();
  const colors = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<string | null>(null);

  async function submit() {
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const trimmed = email.trim();
      if (mode === "reset") {
        await auth.resetPassword(trimmed);
        setNotice("If an account exists for that email, a reset link is on its way.");
      } else {
        if (mode === "sign-up") await auth.signUp(trimmed, password, name.trim() || undefined);
        else await auth.signIn(trimmed, password);
        onSuccess?.();
      }
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  const copy = COPY[mode];

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          {header}
          <Text style={styles.title} accessibilityRole="header">
            {copy.title}
          </Text>
          <Text style={styles.subtitle}>{copy.subtitle}</Text>

          {mode === "sign-up" && (
            <Field label="Name" styles={styles} colors={colors} value={name} onChangeText={setName} autoComplete="name" textContentType="name" />
          )}
          <Field
            label="Email"
            styles={styles}
            colors={colors}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          {mode !== "reset" && (
            <Field
              label="Password"
              styles={styles}
              colors={colors}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
              textContentType={mode === "sign-up" ? "newPassword" : "password"}
              onSubmitEditing={submit}
              returnKeyType="go"
            />
          )}

          {mode === "sign-in" && onSwitchMode && (
            <Pressable onPress={() => onSwitchMode("reset")} accessibilityRole="link" style={styles.forgot}>
              <Text style={styles.linkMuted}>Forgot password?</Text>
            </Pressable>
          )}

          {error && (
            <Text style={styles.error} accessibilityRole="alert" accessibilityLiveRegion="polite">
              {error}
            </Text>
          )}
          {notice && (
            <Text style={styles.notice} accessibilityLiveRegion="polite">
              {notice}
            </Text>
          )}

          <Pressable
            onPress={submit}
            disabled={busy}
            accessibilityRole="button"
            accessibilityState={{ disabled: busy, busy }}
            style={({ pressed }) => [styles.button, (pressed || busy) && styles.buttonPressed]}
          >
            {busy ? (
              <ActivityIndicator color={colors.primaryForeground} />
            ) : (
              <Text style={styles.buttonText}>{copy.submit}</Text>
            )}
          </Pressable>

          {onSwitchMode && (
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                {mode === "sign-in" ? "No account?" : mode === "sign-up" ? "Already have an account?" : "Remembered it?"}
              </Text>
              <Pressable onPress={() => onSwitchMode(mode === "sign-in" ? "sign-up" : "sign-in")} accessibilityRole="link">
                <Text style={styles.link}>{mode === "sign-in" ? "Sign up" : "Sign in"}</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Field({
  label,
  styles,
  colors,
  ...input
}: TextInputProps & { label: string; styles: ReturnType<typeof makeStyles>; colors: ThemeColors }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        placeholderTextColor={colors.mutedForeground}
        style={styles.input}
        {...input}
      />
    </View>
  );
}

function makeStyles(c: ThemeColors) {
  return StyleSheet.create({
    flex: { flex: 1, backgroundColor: c.muted },
    container: { flexGrow: 1, justifyContent: "center", padding: 16 },
    card: {
      width: "100%",
      maxWidth: 420,
      alignSelf: "center",
      backgroundColor: c.card,
      borderColor: c.border,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: radius.lg,
      padding: 24,
      gap: 14,
    },
    title: { fontSize: 22, fontWeight: "600", color: c.foreground, textAlign: "center" },
    subtitle: { fontSize: 14, color: c.mutedForeground, textAlign: "center", marginTop: -8, marginBottom: 4 },
    field: { gap: 6 },
    label: { fontSize: 14, fontWeight: "500", color: c.foreground },
    input: {
      height: 44,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      paddingHorizontal: 12,
      fontSize: 16,
      color: c.foreground,
      backgroundColor: c.background,
    },
    forgot: { alignSelf: "flex-end", marginTop: -6 },
    error: { fontSize: 14, color: c.destructive },
    notice: { fontSize: 14, color: c.mutedForeground },
    button: {
      height: 46,
      borderRadius: radius.md,
      backgroundColor: c.primary,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 4,
    },
    buttonPressed: { opacity: 0.8 },
    buttonText: { fontSize: 16, fontWeight: "600", color: c.primaryForeground },
    // gap, not a trailing space: React Native Web drops trailing whitespace in a row.
    footer: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: 4, marginTop: 4 },
    footerText: { fontSize: 14, color: c.mutedForeground },
    link: { fontSize: 14, fontWeight: "600", color: c.primary },
    linkMuted: { fontSize: 13, color: c.mutedForeground },
  });
}
