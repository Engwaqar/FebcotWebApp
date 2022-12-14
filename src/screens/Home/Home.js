import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View, Image,
} from "react-native";
import { colors } from "../../constants/colorsPallet";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import Layout from "../../components/Layout";
import { globalPath } from "../../constants/globalPath";
import { hp, wp } from "../../helpers/Responsiveness";
import ResponsiveText from "../../components/RnText";
import { routeName } from "../../constants/routeName";
import { _toast } from "../../constants/Index";
import ChatHeader from "../../components/ChatHeader";
import { AttendenceCard } from "../../components/cardView";
import HomeCards from "../../components/HomeCards";
import HomeYarnCard from "../../components/HomeYarnCard";
import CustomersCard from "../../components/CustomersCard";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={{ position: 'relative', flex: 1, }}>
      <ChatHeader
        source={globalPath.home}
        title={'Dashboard'}
        notifaction={globalPath.notifaction}
        value={'1'}
        user={globalPath.user}
        navigation={navigation}
      />
      <ScrollView>
        <View>
          <ResponsiveText
            size={'6'}
            margin={[5, 0, 0, 10]}
            // textAlign={"center"}
            color={colors.primary}
          >
            Contracts
          </ResponsiveText>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10
        }}>
          <HomeCards
            color={'#20c997'}
            title={'Contract Active'}
            count={'547'}
            Subtitle={'Contract currently in process'}
          />
          <HomeCards
            color={'#fd7e14'}
            title={'Contract On-Hold'}
            count={'32'}
            Subtitle={'Contract Successfully done & closed'}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 0
        }}>
          <HomeCards
            color={'#6c757d'}
            title={'Contract Closed'}
            count={'0'}
            Subtitle={'Contract closed with no success'}
          />
          <HomeCards
            color={'#6f42c1'}
            title={'Contract Done'}
            count={'12567'}
            Subtitle={'Contract Successfully done & closed'}
          />
        </View>
        <View>
          <ResponsiveText
            size={'6'}
            margin={[5, 0, 0, 10]}
            // textAlign={"center"}
            color={colors.primary}
          >
            Enquries
          </ResponsiveText>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // marginTop: 10
        }}>
          <HomeYarnCard
            color={colors.white}
            title={'Active Enquries'}
            count={'12'}
            // Subtitle={'Business Enquiries for Custmers'}
            source={globalPath.phone}
          />
          <HomeYarnCard
            source={globalPath.user}
            color={colors.white}
            title={'Contract Closed'}
            count={'12'}
          // Subtitle={'Contract closed with no success'}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // marginTop: 10
        }}>
          <HomeYarnCard
            color={colors.white}
            title={'Active Enquries'}
            count={'12'}
            // Subtitle={'Business Enquiries for Custmers'}
            source={globalPath.bill}
          />
          <HomeYarnCard
            source={globalPath.RecAmount}
            color={colors.white}
            title={'Contract Closed'}
            count={'12'}
          // Subtitle={'Contract closed with no success'}
          />
        </View>
        <View>
          <ResponsiveText
            size={'5'}
            margin={[5, 0, 0, 10]}
            // textAlign={"center"}
            color={colors.primary}
          >
            Top Buyers / Customers
          </ResponsiveText>
        </View>
        <View>
          <CustomersCard
            color={'#6c757d'}
            backgroundColor={'#536473'}
            size={'4'}
            title={'Top Buyers / Customers'}
            Text={'[793]'}
            Subtitle1={'NISHAT MILLS LIMITED ( BHIKKI UNIT)'}
            Subtitle2={'US Denim Private Limited'}
            Subtitle3={'SARENA TEXTILE INDUSTRIES ( PRIVATE ) LTD.'}
            Subtitle4={'NISHAT MILLS LIMITED. (UNIT # 29)'}
            Subtitle5={'NAVEENA INDUSTRIES LIMITED.'}

          />
        </View>
        <View>
          <CustomersCard
            color={'#17a2b8'}
            backgroundColor={'#4293a1'}
            size={'4'}
            title={'Top Supplier / Seller'}
            Text={'[793]'}
            Subtitle1={'NISHAT MILLS LIMITED ( BHIKKI UNIT)'}
            Subtitle2={'US Denim Private Limited'}
            Subtitle3={'SARENA TEXTILE INDUSTRIES ( PRIVATE ) LTD.'}
            Subtitle4={'NISHAT MILLS LIMITED. (UNIT # 29)'}
            Subtitle5={'NAVEENA INDUSTRIES LIMITED.'}

          />
        </View>
        <View>
          <CustomersCard
            color={'#dc3545'}
            backgroundColor={'#de7680'}
            size={'4'}
            title={'Top Selling Articles'}
            Text={'[793]'}
            Subtitle1={'NISHAT MILLS LIMITED ( BHIKKI UNIT)'}
            Subtitle2={'US Denim Private Limited'}
            Subtitle3={'SARENA TEXTILE INDUSTRIES ( PRIVATE ) LTD.'}
            Subtitle4={'NISHAT MILLS LIMITED. (UNIT # 29)'}
            Subtitle5={'NAVEENA INDUSTRIES LIMITED.'}

          />
        </View>
        <View style={{ height: hp(10) }}></View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
