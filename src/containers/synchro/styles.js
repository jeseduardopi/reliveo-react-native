import {StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overBottomContainer: {
        position:"absolute",
        top:"-11%",
        flex: 1,
        backgroundColor: 'black',
        width: Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    },
    bottomNavigationView: {
        backgroundColor: '#2E2E2E',
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        position: "relative",
        alignItems: "center",
    },
    bottomTitle: {
        textAlign: 'left',
        fontSize: 28,
        color: '#A65AFF',
        fontWeight: 'bold',
        padding: 20,
    },
    bottomText: {
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    bottomList: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bottomInfoTitle: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bottomInfoText: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontSize: 12,
        color: '#FFF',
        fontWeight: 'normal',
        marginBottom: 5,
    },
    bottomLien: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontSize: 10,
        color: '#A65AFF',
        fontWeight: 'normal',
        marginBottom: 5,
    },
    bottomWarningText:  {
        textAlign: 'center',
        fontSize: 18,
        color: '#FB9905',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    bottomSuccessText:  {
        textAlign: 'center',
        fontSize: 18,
        color: '#0CF2B1',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    bottomErrorText:  {
        textAlign: 'center',
        fontSize: 18,
        color: '#F06458',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    ImageQrCodeBtnContainer: {
        backgroundColor: '#232323',
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 150,
        borderRadius: 15,
        marginTop: 10,
    },
    ImageGpsLocationBtnContainer: {
        backgroundColor: '#232323',
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        borderRadius: 5,
        position:"absolute",
        bottom:10,
        right:10,
    },
    ImageEventContainer: {
        marginBottom:20,
        marginTop:0,
    },
    mapContainer: {
        width: Dimensions.get('window').width/1.1,
        height: 200,
        borderRadius: 30,
        position:"relative",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
    },
    map: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
    },
});

export default styles