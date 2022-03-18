import React from 'react'
import PropTypes from 'prop-types';
import Chart from 'react-google-charts'

export function GeoChart({ geoData }) {
    var options = {
        colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
        backgroundColor: '#81d4fa',
    };
    
    return (
        <div>
            <Chart
                width={'800px'}
                height={'85vh'}
                chartType='GeoChart'
                data={geoData}
                options={options}
                magnifyingGlass={{'enable': 'true', 'zoomFactor': '7.5'}}
                mapsApiKey="AIzaSyAvzv1n84YBJeC38E-YfbPnydDgModsJ58"
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

GeoChart.propTypes = {
    geoData: PropTypes.array.isRequired,
};

export default GeoChart;