<!DOCTYPE html>
<html>
  <body>
    <?php
    $url = 'http://www.google.co.kr/ig/api?weather=Taegu&ie=utf-8&oe=utf-8&hl=ko';
    $weather = file_get_contents($url);
    $xml = simplexml_load_string($weather);
    $data = $xml->weather;
    echo $data->current_conditions->icon['data'];                    //날씨 아이콘 URL
    echo $data->current_conditions->condition['data'];             //날씨
    echo $data->current_conditions->temp_c['data'];                //현재온도(℃)
    echo $data->current_conditions->temp_f['data'];                 //현재온도(℉)
    echo $data->current_conditions->humidity['data'];               //습도(℉)
    echo $data->current_conditions->wind_condition['data'];     //풍향, 풍속
    echo $data->forecast_information->forecast_date['data'];     //출력일자
    ?>
  </body>
</html>
