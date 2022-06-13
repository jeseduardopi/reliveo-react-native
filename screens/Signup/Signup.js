import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { KeyboardAvoidingWrapper } from '../../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../../Components/styles'
import Svg, { Rect, Path } from "react-native-svg"



const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent, GoogleBtn, ButtonTextGoogle } = styles

//keyboard voiding view
const { primary, secondary, ternary, darkLight } = Colors

export const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>

      <View style={Container}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>

          <Text style={PageTitle}>Créez un compte aujourd'hui</Text>

          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate("ProfileSignup")
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
              <View style={StyledFormArea}>

                <TouchableOpacity onPress={handleSubmit}>
                  <GoogleInscriptionLogo />

                </TouchableOpacity>

                <View style={Line}></View>
                {/* add here style for google with styled component 
                            in StyledButton
                            
                        */}
                <CustomTextInput label={"Identifiant"}
                  icon="person"
                  placeholder="toto"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('identifiant')}
                  onBlur={handleBlur('identifiant')}
                  value={values.identifiant}
                />
                <CustomTextInput label={"Adresse Mail"}
                  icon="mail"
                  placeholder="toto@mail.com"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <CustomTextInput label={"Mot de passe"}
                  icon="lock"
                  placeholder="* * * * * * * *"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <CustomTextInput label={"Confirmez mot de passe"}
                  icon="lock"
                  placeholder="* * * * * * * *"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPasswords')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <Text style={MsgBox} >...</Text>
                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                  <Text style={ButtonText}>Je m'inscris</Text>
                </TouchableOpacity>
                <View style={ExtraView}>
                  <Text style={ExtraText}>J'ai déja un compte</Text>
                  <Text style={TextLink}>Se connecter</Text>
                </View>

              </View>
            }

          </Formik>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const CustomTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Octicons name={icon} size={30} color={secondary} />
      </View>
      <Text style={StyledInputLabel}>{label}</Text>
      <TextInput style={StyledTextInput} {...props} />
      {isPassword && (
        <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity style={StyledButton}>Button</TouchableOpacity> */}
    </View>
  )
}


const GoogleInscriptionLogo = (props) => (
  <Svg
    width={348}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={348} height={54} rx={15} fill="#F2F2F2" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.4 27.318c0-.992-.096-1.947-.273-2.863H32v5.415h8.073c-.348 1.75-1.405 3.233-2.993 4.226v3.512h4.847c2.837-2.437 4.473-6.026 4.473-10.29Z"
      fill="#4285F4"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 41c4.05 0 7.446-1.254 9.927-3.392l-4.847-3.512c-1.344.84-3.062 1.336-5.08 1.336-3.907 0-7.214-2.463-8.393-5.772h-5.011v3.627C21.064 37.863 26.136 41 32 41Z"
      fill="#34A853"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.607 29.66c-.3-.84-.47-1.737-.47-2.66s.17-1.82.47-2.66v-3.627h-5.011A13.24 13.24 0 0 0 17 27c0 2.26.58 4.397 1.596 6.287l5.01-3.627Z"
      fill="#FBBC05"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 18.568c2.202 0 4.18.706 5.734 2.094l4.302-4.016C39.44 14.387 36.043 13 32 13c-5.864 0-10.936 3.137-13.404 7.713l5.01 3.627c1.18-3.31 4.487-5.772 8.394-5.772Z"
      fill="#EA4335"
    />
    <Path
      d="M71.63 19.296V32h-2.19V19.296h2.19Zm4.598 5.279V32h-2.103v-9.441h1.981l.122 2.015Zm-.375 2.355-.68-.008a6.138 6.138 0 0 1 .279-1.841 4.533 4.533 0 0 1 .767-1.44c.332-.401.728-.71 1.187-.925.46-.221.972-.332 1.536-.332.454 0 .864.064 1.23.192.373.122.69.323.951.602.268.28.471.643.611 1.091.14.442.21.986.21 1.632V32h-2.112v-6.108c0-.454-.067-.811-.2-1.073a1.123 1.123 0 0 0-.568-.567c-.244-.117-.55-.175-.916-.175-.36 0-.684.076-.969.227a2.18 2.18 0 0 0-.724.62 3 3 0 0 0-.445.907c-.105.343-.157.71-.157 1.1Zm13.533 2.513c0-.209-.052-.398-.157-.567-.104-.174-.305-.331-.602-.47-.29-.14-.721-.268-1.291-.385-.5-.11-.96-.241-1.379-.393a4.373 4.373 0 0 1-1.064-.567 2.388 2.388 0 0 1-.69-.785 2.174 2.174 0 0 1-.244-1.047c0-.384.084-.747.253-1.09.169-.344.41-.646.724-.908a3.525 3.525 0 0 1 1.143-.62 4.78 4.78 0 0 1 1.519-.227c.79 0 1.469.134 2.033.402.57.261 1.006.62 1.309 1.073.302.448.453.954.453 1.518H89.29c0-.25-.064-.482-.192-.698a1.337 1.337 0 0 0-.558-.532c-.25-.14-.564-.21-.942-.21-.361 0-.66.059-.9.175a1.23 1.23 0 0 0-.523.436c-.11.18-.165.379-.165.594 0 .157.029.3.087.427.064.122.169.236.314.34.145.1.343.193.593.28.256.087.576.171.96.253.722.151 1.341.346 1.859.584.523.233.925.536 1.204.908.279.366.419.832.419 1.396 0 .419-.09.803-.27 1.152-.175.343-.431.643-.769.899-.337.25-.741.445-1.213.584a5.46 5.46 0 0 1-1.57.21c-.855 0-1.58-.152-2.173-.454-.593-.308-1.044-.701-1.352-1.178-.303-.483-.454-.983-.454-1.501h2.033c.023.39.13.701.323.934.198.227.442.392.733.497.297.099.602.148.916.148.378 0 .695-.05.951-.148.256-.105.45-.244.585-.419a1 1 0 0 0 .2-.61Zm7.758 1.056c.343 0 .651-.067.924-.2.28-.14.504-.332.672-.576.175-.245.27-.527.288-.847h1.981a2.952 2.952 0 0 1-.541 1.667c-.349.5-.812.899-1.388 1.195a4.177 4.177 0 0 1-1.91.437c-.722 0-1.35-.123-1.885-.367a3.725 3.725 0 0 1-1.335-1.03 4.534 4.534 0 0 1-.803-1.51 6.23 6.23 0 0 1-.262-1.832v-.305c0-.651.088-1.262.262-1.832.18-.576.448-1.082.803-1.518a3.64 3.64 0 0 1 1.335-1.021c.535-.25 1.16-.376 1.876-.376.756 0 1.42.152 1.99.454.57.297 1.017.713 1.343 1.248.332.53.503 1.146.515 1.85h-1.98a2.109 2.109 0 0 0-.263-.943 1.729 1.729 0 0 0-.645-.68c-.274-.169-.602-.253-.986-.253-.425 0-.777.087-1.056.262-.28.168-.497.4-.654.698-.157.29-.271.619-.34.986-.065.36-.097.735-.097 1.125v.305c0 .39.032.768.096 1.135.064.366.175.695.332.986.163.285.384.515.663.69.28.168.634.252 1.065.252Zm7.591-6.143V32h-2.103v-9.441h2.007l.096 1.797Zm2.888-1.858-.018 1.954a4.085 4.085 0 0 0-.418-.052 5.503 5.503 0 0 0-.437-.017c-.36 0-.677.052-.951.157a1.793 1.793 0 0 0-.689.436c-.18.186-.32.413-.419.68a3.028 3.028 0 0 0-.174.9l-.48.034c0-.593.058-1.143.174-1.649.117-.506.291-.951.524-1.335.238-.384.535-.684.89-.899.36-.215.776-.323 1.247-.323.128 0 .265.012.411.035.151.024.264.05.34.079Zm3.569.06V32h-2.112v-9.441h2.112Zm-2.252-2.477c0-.32.105-.585.315-.794.215-.215.511-.323.89-.323.372 0 .666.108.881.323.215.21.323.474.323.794 0 .314-.108.576-.323.785-.215.21-.509.314-.881.314-.379 0-.675-.104-.89-.314a1.064 1.064 0 0 1-.315-.785Zm7.627 10.252 2.312-7.774h2.181L117.779 32h-1.361l.149-1.667Zm-1.772-7.774 2.356 7.81.114 1.631h-1.362l-3.298-9.441h2.19Zm11.605 9.616c-.698 0-1.329-.114-1.893-.34a4.17 4.17 0 0 1-1.431-.97 4.3 4.3 0 0 1-.899-1.456 5.112 5.112 0 0 1-.314-1.807v-.349c0-.738.108-1.407.323-2.007a4.55 4.55 0 0 1 .899-1.535c.384-.43.837-.76 1.361-.986a4.23 4.23 0 0 1 1.701-.34c.675 0 1.266.113 1.772.34.506.227.925.546 1.256.96.337.407.588.892.75 1.457a6.49 6.49 0 0 1 .254 1.867v.899h-7.295v-1.51h5.218v-.166a2.952 2.952 0 0 0-.227-1.064c-.134-.332-.34-.6-.62-.803-.279-.203-.651-.305-1.116-.305-.349 0-.661.075-.934.227a1.841 1.841 0 0 0-.672.637c-.18.279-.32.616-.419 1.012-.093.39-.139.829-.139 1.317v.35c0 .412.055.796.165 1.151.117.35.285.654.507.916a2.4 2.4 0 0 0 .802.62c.314.145.672.218 1.074.218.506 0 .956-.102 1.352-.305a3.098 3.098 0 0 0 1.03-.864l1.108 1.073a4.358 4.358 0 0 1-.794.855 3.986 3.986 0 0 1-1.196.655c-.465.168-1.006.253-1.623.253Zm12.722-1.85V32h-7.033v-1.675h7.033Zm-.192-6.457L132.805 32h-1.361v-1.352l6.09-8.09h1.396v1.31Zm-.811-1.31v1.676h-6.571V22.56h6.571Zm10.209 7.775 2.312-7.774h2.181L149.541 32h-1.362l.149-1.667Zm-1.772-7.774 2.356 7.81.114 1.631h-1.361l-3.299-9.441h2.19Zm7.025 4.825v-.2c0-.681.098-1.312.296-1.894a4.508 4.508 0 0 1 .855-1.527 3.86 3.86 0 0 1 1.379-1.012c.547-.244 1.163-.367 1.85-.367.692 0 1.309.123 1.85.367a3.846 3.846 0 0 1 1.387 1.012c.378.43.666.94.864 1.527a5.84 5.84 0 0 1 .296 1.893v.201a5.84 5.84 0 0 1-.296 1.894 4.537 4.537 0 0 1-.864 1.527c-.378.43-.838.767-1.379 1.012-.541.238-1.154.358-1.841.358-.692 0-1.311-.12-1.858-.358a4.003 4.003 0 0 1-1.379-1.012 4.537 4.537 0 0 1-.864-1.527 5.84 5.84 0 0 1-.296-1.894Zm2.102-.2v.2c0 .425.044.826.131 1.204.088.378.224.71.41.995.187.285.425.509.716.672.291.163.637.244 1.038.244.39 0 .727-.081 1.012-.244.291-.163.53-.387.716-.672.186-.285.323-.617.41-.995.093-.378.14-.78.14-1.204v-.2c0-.42-.047-.815-.14-1.187a3.042 3.042 0 0 0-.419-1.004 1.997 1.997 0 0 0-.715-.68c-.285-.169-.626-.253-1.021-.253-.396 0-.739.084-1.03.253-.285.163-.52.39-.707.68-.186.291-.322.626-.41 1.004a5.202 5.202 0 0 0-.131 1.186Zm14.118 2.591v-7.216h2.112V32h-1.989l-.123-2.225Zm.297-1.963.707-.018c0 .634-.07 1.219-.21 1.754a4.05 4.05 0 0 1-.645 1.388 3.02 3.02 0 0 1-1.117.916c-.454.215-.998.323-1.632.323-.459 0-.881-.067-1.265-.201a2.593 2.593 0 0 1-.995-.62c-.273-.279-.485-.642-.637-1.09-.151-.448-.227-.983-.227-1.606v-6.1h2.103v6.118c0 .343.041.63.122.863.082.227.192.41.332.55.14.14.303.239.489.297.186.058.384.087.593.087.599 0 1.07-.116 1.414-.349.349-.238.596-.558.741-.96.151-.401.227-.852.227-1.352Zm9.267 1.631c0-.209-.053-.398-.157-.567-.105-.174-.306-.331-.602-.47-.291-.14-.722-.268-1.292-.385-.5-.11-.96-.241-1.378-.393a4.365 4.365 0 0 1-1.065-.567 2.383 2.383 0 0 1-.689-.785 2.173 2.173 0 0 1-.245-1.047c0-.384.085-.747.253-1.09.169-.344.41-.646.725-.908a3.523 3.523 0 0 1 1.143-.62 4.774 4.774 0 0 1 1.518-.227c.791 0 1.469.134 2.033.402.57.261 1.006.62 1.309 1.073.302.448.454.954.454 1.518h-2.103c0-.25-.064-.482-.192-.698a1.339 1.339 0 0 0-.559-.532c-.25-.14-.564-.21-.942-.21-.361 0-.66.059-.899.175-.233.11-.407.256-.523.436a1.11 1.11 0 0 0-.166.594c0 .157.029.3.087.427.064.122.169.236.314.34.146.1.343.193.594.28.256.087.575.171.959.253.722.151 1.341.346 1.859.584.523.233.925.536 1.204.908.279.366.419.832.419 1.396 0 .419-.09.803-.271 1.152-.174.343-.43.643-.767.899-.338.25-.742.445-1.213.584-.466.14-.989.21-1.571.21-.855 0-1.579-.152-2.173-.454-.593-.308-1.044-.701-1.352-1.178-.303-.483-.454-.983-.454-1.501h2.033c.024.39.131.701.323.934.198.227.442.392.733.497.297.099.602.148.916.148.378 0 .695-.05.951-.148a1.37 1.37 0 0 0 .585-.419.998.998 0 0 0 .201-.61Zm13.673.663v-4.502a1.92 1.92 0 0 0-.184-.872 1.282 1.282 0 0 0-.558-.568c-.244-.133-.553-.2-.925-.2-.343 0-.64.058-.89.174-.25.117-.445.274-.585.471a1.14 1.14 0 0 0-.209.672h-2.094c0-.372.09-.733.27-1.082.181-.349.442-.66.786-.933a3.919 3.919 0 0 1 1.23-.646 5.115 5.115 0 0 1 1.605-.236c.71 0 1.338.12 1.885.358.553.239.986.6 1.3 1.082.32.477.48 1.076.48 1.798v4.197c0 .43.029.817.088 1.16.063.338.154.631.27.881V32h-2.155a3.71 3.71 0 0 1-.236-.864 7.103 7.103 0 0 1-.078-1.03Zm.305-3.847.017 1.3h-1.509c-.39 0-.733.037-1.03.113a2.11 2.11 0 0 0-.741.314c-.198.14-.346.308-.445.506a1.481 1.481 0 0 0-.149.672c0 .25.059.48.175.69.116.203.285.363.506.48.227.116.5.174.82.174.431 0 .806-.087 1.126-.262.325-.18.581-.398.768-.654.186-.262.285-.51.296-.742l.681.934c-.07.238-.189.494-.358.768-.169.273-.39.535-.663.785a3.29 3.29 0 0 1-.969.602c-.372.157-.802.236-1.291.236-.617 0-1.166-.123-1.649-.367a2.927 2.927 0 0 1-1.134-1.003 2.598 2.598 0 0 1-.411-1.44c0-.5.094-.942.28-1.326.192-.39.471-.716.837-.978.373-.261.826-.46 1.362-.593a7.275 7.275 0 0 1 1.832-.21h1.649Zm6.937 4.074 2.312-7.774h2.182L201.493 32h-1.361l.148-1.667Zm-1.771-7.774 2.356 7.81.113 1.631h-1.361l-3.299-9.441h2.191Zm11.605 9.616c-.698 0-1.33-.114-1.894-.34a4.189 4.189 0 0 1-1.431-.97 4.3 4.3 0 0 1-.899-1.456 5.112 5.112 0 0 1-.314-1.807v-.349c0-.738.108-1.407.323-2.007a4.55 4.55 0 0 1 .899-1.535c.384-.43.838-.76 1.361-.986a4.236 4.236 0 0 1 1.702-.34c.674 0 1.265.113 1.771.34.506.227.925.546 1.256.96.338.407.588.892.751 1.457.168.564.253 1.186.253 1.867v.899h-7.295v-1.51h5.218v-.166a2.952 2.952 0 0 0-.227-1.064c-.134-.332-.34-.6-.619-.803-.279-.203-.652-.305-1.117-.305-.349 0-.66.075-.934.227a1.857 1.857 0 0 0-.672.637c-.18.279-.32.616-.418 1.012-.094.39-.14.829-.14 1.317v.35c0 .412.055.796.166 1.151.116.35.285.654.506.916.221.262.488.468.803.62.314.145.671.218 1.073.218a2.91 2.91 0 0 0 1.352-.305 3.098 3.098 0 0 0 1.03-.864l1.108 1.073a4.327 4.327 0 0 1-.794.855 3.98 3.98 0 0 1-1.195.655c-.466.168-1.007.253-1.623.253Zm9.275-1.676c.343 0 .651-.067.925-.2.279-.14.503-.332.672-.576a1.58 1.58 0 0 0 .288-.847h1.98a2.944 2.944 0 0 1-.541 1.667 3.75 3.75 0 0 1-1.387 1.195 4.178 4.178 0 0 1-1.911.437c-.721 0-1.349-.123-1.885-.367a3.729 3.729 0 0 1-1.335-1.03 4.54 4.54 0 0 1-.802-1.51 6.213 6.213 0 0 1-.262-1.832v-.305c0-.651.087-1.262.262-1.832.18-.576.448-1.082.802-1.518.355-.437.8-.777 1.335-1.021.536-.25 1.161-.376 1.876-.376.757 0 1.42.152 1.99.454.57.297 1.018.713 1.344 1.248.331.53.503 1.146.514 1.85h-1.98a2.117 2.117 0 0 0-.262-.943 1.73 1.73 0 0 0-.646-.68c-.273-.169-.602-.253-.986-.253-.424 0-.776.087-1.056.262a1.761 1.761 0 0 0-.654.698 3.38 3.38 0 0 0-.34.986c-.064.36-.096.735-.096 1.125v.305c0 .39.032.768.096 1.135.064.366.174.695.331.986.163.285.384.515.663.69.28.168.634.252 1.065.252Zm19.894-4.99v4.85c-.18.24-.462.5-.846.786-.378.28-.881.52-1.51.724-.628.204-1.41.306-2.347.306a5.8 5.8 0 0 1-2.19-.402 4.8 4.8 0 0 1-1.719-1.195c-.477-.524-.846-1.16-1.108-1.911-.262-.756-.393-1.617-.393-2.583v-.881c0-.96.12-1.815.358-2.566.244-.756.593-1.396 1.047-1.92a4.38 4.38 0 0 1 1.641-1.186c.645-.273 1.375-.41 2.19-.41 1.041 0 1.902.175 2.582.524.687.343 1.216.82 1.588 1.43.373.611.608 1.31.707 2.095h-2.146a3.394 3.394 0 0 0-.41-1.187 2.081 2.081 0 0 0-.855-.82c-.367-.204-.844-.306-1.431-.306-.507 0-.952.096-1.335.288a2.523 2.523 0 0 0-.96.847c-.25.372-.439.826-.567 1.36a7.912 7.912 0 0 0-.192 1.833v.9c0 .697.072 1.317.218 1.858.151.54.366.997.645 1.37.285.372.632.654 1.039.846.407.186.867.28 1.378.28.501 0 .911-.042 1.231-.123.32-.087.573-.19.759-.305.192-.123.34-.239.445-.35V27.14h-2.644v-1.632h4.825Zm1.815 1.875v-.2c0-.681.099-1.312.297-1.894a4.508 4.508 0 0 1 .855-1.527 3.86 3.86 0 0 1 1.379-1.012c.546-.244 1.163-.367 1.849-.367.693 0 1.309.123 1.85.367.547.238 1.01.576 1.388 1.012.378.43.666.94.863 1.527a5.84 5.84 0 0 1 .297 1.893v.201a5.84 5.84 0 0 1-.297 1.894 4.518 4.518 0 0 1-.863 1.527c-.378.43-.838.767-1.379 1.012-.541.238-1.155.358-1.841.358-.692 0-1.312-.12-1.859-.358a4 4 0 0 1-1.378-1.012 4.537 4.537 0 0 1-.864-1.527 5.84 5.84 0 0 1-.297-1.894Zm2.103-.2v.2c0 .425.044.826.131 1.204.087.378.224.71.41.995.186.285.425.509.716.672.29.163.637.244 1.038.244.39 0 .727-.081 1.012-.244.291-.163.529-.387.716-.672a3.08 3.08 0 0 0 .41-.995c.093-.378.139-.78.139-1.204v-.2c0-.42-.046-.815-.139-1.187a3.063 3.063 0 0 0-.419-1.004 2 2 0 0 0-.716-.68c-.285-.169-.625-.253-1.021-.253-.395 0-.738.084-1.029.253-.285.163-.521.39-.707.68-.186.291-.323.626-.41 1.004a5.202 5.202 0 0 0-.131 1.186Zm8.036.2v-.2c0-.681.099-1.312.297-1.894a4.508 4.508 0 0 1 .855-1.527 3.86 3.86 0 0 1 1.379-1.012c.547-.244 1.163-.367 1.85-.367.692 0 1.308.123 1.849.367.547.238 1.01.576 1.388 1.012.378.43.666.94.864 1.527.197.582.296 1.213.296 1.893v.201c0 .68-.099 1.312-.296 1.894a4.537 4.537 0 0 1-.864 1.527c-.378.43-.838.767-1.379 1.012-.541.238-1.155.358-1.841.358-.692 0-1.312-.12-1.859-.358a4 4 0 0 1-1.378-1.012 4.537 4.537 0 0 1-.864-1.527 5.84 5.84 0 0 1-.297-1.894Zm2.103-.2v.2c0 .425.044.826.131 1.204.087.378.224.71.41.995.186.285.425.509.716.672.291.163.637.244 1.038.244.39 0 .727-.081 1.012-.244.291-.163.53-.387.716-.672.186-.285.323-.617.41-.995.093-.378.139-.78.139-1.204v-.2c0-.42-.046-.815-.139-1.187a3.042 3.042 0 0 0-.419-1.004 2 2 0 0 0-.716-.68c-.285-.169-.625-.253-1.02-.253-.396 0-.739.084-1.03.253-.285.163-.521.39-.707.68-.186.291-.323.626-.41 1.004a5.202 5.202 0 0 0-.131 1.186Zm14.485-4.625h1.911v9.18c0 .848-.181 1.57-.541 2.163a3.479 3.479 0 0 1-1.51 1.353c-.646.314-1.393.47-2.242.47a5.28 5.28 0 0 1-1.205-.156 4.952 4.952 0 0 1-1.274-.506 3.154 3.154 0 0 1-1.02-.9l.986-1.238c.337.401.709.695 1.116.881.408.186.835.28 1.283.28.483 0 .893-.09 1.23-.271.344-.175.608-.433.794-.777.187-.343.28-.762.28-1.256v-7.085l.192-2.138Zm-6.414 4.825v-.183c0-.716.088-1.367.262-1.955a4.631 4.631 0 0 1 .751-1.527 3.27 3.27 0 0 1 1.186-.986c.466-.232.992-.349 1.58-.349.61 0 1.131.11 1.561.332.437.221.8.538 1.091.951.291.407.518.896.681 1.466.168.564.293 1.193.375 1.885v.584a9.492 9.492 0 0 1-.384 1.85 5.086 5.086 0 0 1-.716 1.449 3.048 3.048 0 0 1-1.099.942c-.43.221-.939.332-1.527.332-.576 0-1.096-.12-1.562-.358a3.552 3.552 0 0 1-1.186-1.004 4.758 4.758 0 0 1-.751-1.518 6.703 6.703 0 0 1-.262-1.91Zm2.103-.183v.183c0 .43.041.832.122 1.204.088.373.219.701.393.986.18.28.407.5.681.663.279.158.607.236.986.236.494 0 .898-.105 1.212-.314.32-.21.565-.492.733-.846.175-.361.297-.762.367-1.205V26.53a3.885 3.885 0 0 0-.218-.96 2.56 2.56 0 0 0-.428-.776 1.784 1.784 0 0 0-.68-.524 2.272 2.272 0 0 0-.969-.192c-.378 0-.707.082-.986.244a2 2 0 0 0-.689.672 3.303 3.303 0 0 0-.393.995 5.398 5.398 0 0 0-.131 1.213Zm10.654-8.604V32h-2.111V18.598h2.111Zm6.466 13.578c-.698 0-1.329-.114-1.894-.34a4.189 4.189 0 0 1-1.431-.97 4.297 4.297 0 0 1-.898-1.456 5.09 5.09 0 0 1-.314-1.807v-.349c0-.738.107-1.407.322-2.007.216-.599.515-1.11.899-1.535.384-.43.838-.76 1.361-.986a4.236 4.236 0 0 1 1.702-.34c.675 0 1.265.113 1.771.34.506.227.925.546 1.257.96.337.407.587.892.75 1.457a6.49 6.49 0 0 1 .253 1.867v.899h-7.295v-1.51h5.218v-.166a2.931 2.931 0 0 0-.227-1.064c-.133-.332-.34-.6-.619-.803-.279-.203-.652-.305-1.117-.305-.349 0-.66.075-.934.227a1.846 1.846 0 0 0-.671.637c-.181.279-.32.616-.419 1.012a5.69 5.69 0 0 0-.14 1.317v.35c0 .412.055.796.166 1.151.116.35.285.654.506.916.221.262.489.468.803.62.314.145.672.218 1.073.218a2.91 2.91 0 0 0 1.352-.305 3.098 3.098 0 0 0 1.03-.864l1.108 1.073a4.297 4.297 0 0 1-.794.855 3.98 3.98 0 0 1-1.195.655c-.466.168-1.007.253-1.623.253Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </Svg>
)


