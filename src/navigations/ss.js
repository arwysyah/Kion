// import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import University from '../screen/ContentScreen/University'
// import Challange from '../screen/ContentScreen/University'
// import Science from '../screen/ContentScreen/Science'
// import Technology from '../screen/ContentScreen/Technology'
// import Story from '../screen/ContentScreen/Story'
// import Scholarship from '../screen/ContentScreen/Scholarship'
// import Internship from '../screen/ContentScreen/Internship'
// const Tab = createMaterialTopTabNavigator();

// export default function TopButton() {
//   return (
//     <Tab.Navigator
//     tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'grey',
//         labelStyle: {},
//         style: {
//           backgroundColor: '#2b2929',

//           opacity: 0.7,
//           height: 55,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginHorizontal: 30,
//           borderRadius: 20,
//           position: 'absolute',
//           borderTopWidth: 0,
//           bottom: 0,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 3,
//           },
//           shadowOpacity: 0.29,
//           shadowRadius: 4.65,

//           elevation: 7,
//         },
//         tabStyle: {height: 50}}}>
//       <Tab.Screen name="University" component={University} />
//       <Tab.Screen name="Story" component={Story} />
//       <Tab.Screen name="Technology" component={Technology} />
//       <Tab.Screen name="Science" component={Science } />
//       <Tab.Screen name="Scholarship" component={Scholarship} />
//       <Tab.Screen name="Internship" component={Internship} />
//       <Tab.Screen name="Challange" component={Challange} />
//     </Tab.Navigator>
//   );
// }