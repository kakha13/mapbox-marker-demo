<template>
    <Page>
        <ActionBar>
            <Label text="Home" />
        </ActionBar>

        <GridLayout rows="*">
            <Mapbox
                accessToken="your_token"
                mapStyle="streets" latitude="41.716667" longitude="44.783333" hideLogo="false" hideCompass="false"
                zoomLevel="5" showUserLocation="false" disableZoom="false" disableRotation="false" disableScroll="false"
                disableTilt="false" @mapReady="onMapReady($event)">
            </Mapbox>
        </GridLayout>
    </Page>
</template>

<script>
export default {

    methods: {
        onMapReady(event) {
            const mapboxView = event.map;

            var onTap = function (marker) {
                console.log("Marker tapped with title: '" + marker.title + "'");
            };
            var onCalloutTap = function (marker) {
                alert("Marker callout tapped with title: '" + marker.title + "'");
            };

            mapboxView.addMarkers([
                {
                    id: 1, // can be user in 'removeMarkers()'
                    lat: 41.7713151495571,
                    lng: 44.15345008190155,
                    title: 'One-line title here', // no popup unless set
                    subtitle: 'Infamous subtitle!',
                    // icon: 'res://cool_marker', // preferred way, otherwise use:
                    // iconPath: res,
                    selected: false,
                    onTap: onTap,
                    onCalloutTap: onCalloutTap
                },
            ]);


        }
    },
};
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
    @include colorize($color: accent);
}

.info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
}
</style>
