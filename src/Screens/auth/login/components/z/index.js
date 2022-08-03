{
	/* <KeyboardAwareScrollView>
				<BlurView blurAmount={20} blurType="light" style={styles.blur}>
					<View style={styles.login}>
						<Image
							style={styles.iconCompany}
							source={iconCompany}
							resizeMode="contain"
						/>
						<Input
							placeholder="Email"
							placeholderTextColor={appTheme.white}
							iconL={'user'}
							customInput={styles.inputCont}
							customiconL={styles.iconInput}
							customCont={styles.contInput}
							autoCorrect={false}
							onChangeText={text => setEmail(text)}
						/>
						<Input
							placeholder="Password"
							placeholderTextColor={appTheme.white}
							iconL={'lock1'}
							iconR={'eye'}
							customInput={styles.inputCont}
							customiconL={styles.iconInput}
							customiconR={styles.iconInputR}
							customCont={styles.contInput}
							autoCorrect={false}
							secureTextEntry={true}
							onChangeText={text => setPassword(text)}
						/>
						<Button
							onPress={() => Auth.SignIn(email, password)}
							tittle={'Login'}
							width={'90%'}
							customButton={styles.buttonLogin}
						/>
						<ButtonText
							onPress={() => Navigation.navigate('ForgotPass')}
							tittle={'Forgot Password?'}
							width={'40%'}
						/>
						<View style={styles.inputSocial}>
							<Button
								onPress={() => Auth.facebookLogin()}
								tittle={'Facebook'}
								icon={'facebook-square'}
								width={'40%'}
								customIcon={styles.icon}
								customButton={styles.buttonRedes}
								customTittle={styles.tittle}
								backgroundColor={appTheme.lightGrayOpacity}
							/>
							<Button
								onPress={() => Auth.googleLogin()}
								tittle={'Google'}
								icon={'google'}
								width={'40%'}
								customIcon={styles.icon}
								customButton={styles.buttonRedes}
								customTittle={styles.tittle}
								backgroundColor={appTheme.lightGrayOpacity}
							/>
						</View>
						<View style={styles.inputSignUp}>
							<Text style={styles.signUp}>{"Don't have an account?"}</Text>
							<ButtonText
								tittle={'Sign Up'}
								width={'19%'}
								onPress={() => Navigation.navigate('Register')}
							/>
						</View>
					</View>
				</BlurView>
			</KeyboardAwareScrollView> */
}
