var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FAFAFA",
    background_transparent: "yes",
    border_color: "#FAFAFA",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 4,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FBC469",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BLR2338: {
      name: "Брест",
      color: "#007A65",
      hover_color: "#FBC469",
      description: "Инспекции МНС по Брестской области",
      url: "brest.html"
    },
    BLR2339: {
      name: "Гомель",
      color: "#007A65",
      hover_color: "#FBC469",
		description: "Инспекции МНС по Гомельской области",
      url: "gomel.html"
    },
    BLR2340: {
      name: "Могилёв",
      color: "#007A65",
      hover_color: "#FBC469",
		description: "Инспекции МНС по Могилевской области",
      url: "mogilev.html"
    },
    BLR2341: {
      name: "Витебск",
      color: "#007A65",
      hover_color: "#FBC469",
		description: "Инспекции МНС по Витебской области",
      url: "vitebsk.html"
    },
    BLR2344: {
      name: "Гродно",
      color: "#007A65",
      hover_color: "#FBC469",
		description: "Инспекции МНС по Гродненской области",
      url: "grodno.html"
    },
    BLR2345: {
      name: "Минская область",
      color: "#007A65",
      hover_color: "#FBC469",
		description: "Инспекции МНС по Минской области",
      url: "minsk-region.html"
    },
    BLR4825: {
      name: "Минск",
      color: "#007A65",
      hover_color: "#FBC469",
		description: "Инспекции МНС по городу Минску",
      url: "minsk.html"
    }
  },
//   locations: {
//     "0": {
//       lat: "53.9",
//       lng: "27.566667",
//       name: "Minvsk"
//     }
//   },
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};