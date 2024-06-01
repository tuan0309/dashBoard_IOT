import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import Fan from "../../components/FanController";
import Light from "../../components/LightController";
import AirIcon from '@mui/icons-material/Air';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { scaleLinear } from 'd3-scale'; // You'll need to install d3-scale
import { useState, useEffect } from 'react';

// This function will return a color scale which will give us a color between blue and red based on the input value

  const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const [temperature, setTemperature] = useState(20);
    const [humidity, setHumidity] = useState(50);
    const [light, setLight] = useState(300);
  
    //Màu
    const temperatureColorScale = scaleLinear()
      .domain([0, 50])
      .range(['#12c2e9', '#f64f59']);
  
    const humidityColorScale = scaleLinear()
      .domain([10, 100])
      .range(['#12c2e9', 'blue']);
  
    const lightColorScale = scaleLinear()
      .domain([100, 500])
      .range(['#FEC84A', '#E12A26']);
  
    const temperatureBackgroundColor = temperatureColorScale(temperature);
    const humidityBackgroundColor = humidityColorScale(humidity);
    const lightBackgroundColor = lightColorScale(light);


    //random
  useEffect(() => {
    const temperatureInterval = setInterval(() => {
      setTemperature(Math.floor(Math.random() * 51));
    }, 10000);

    const humidityInterval = setInterval(() => {
      setHumidity(Math.floor(Math.random() * 91) + 10);
    }, 10000);

    const lightInterval = setInterval(() => {
      setLight(Math.floor(Math.random() * 401) + 100);
    }, 10000);

    return () => {
      clearInterval(temperatureInterval);
      clearInterval(humidityInterval);
      clearInterval(lightInterval);
    };
  }, []);
  
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          backgroundColor={temperatureBackgroundColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="TEMP"
            subtitle={`${temperature}°C`}
            icon={
              <DeviceThermostatIcon
                sx={{ color: colors.greenAccent[100], fontSize: "40px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 4"
          backgroundColor={humidityBackgroundColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="HUMIDITY"
            subtitle={`${humidity}%`}
            icon={
              <AirIcon
                sx={{ color: colors.greenAccent[100], fontSize: "40px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={lightBackgroundColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="LIGHT"
            subtitle={`${light}Lux`}
            icon={
              <Brightness6Icon
                sx={{ color: colors.greenAccent[100], fontSize: "40px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                CHART
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.greenAccent[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Fan />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.greenAccent[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Light />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
