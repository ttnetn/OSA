
(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());
    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    // 示例數據
    const data = [
        ['fo', 10], ['um', 211], ['us', 812], ['jp', 813], ['sc', 14], ['in', 15],
        ['fr', 16], ['fm', 17], ['cn', 518], ['pt', 19], ['sw', 20], ['sh', 721],
        ['br', 22], ['ki', 23], ['ph', 24], ['mx', 25], ['es', 926], ['bu', 627],
        ['mv', 28], ['sp', 829], ['gb', 630], ['gr', 31], ['as', 32], ['dk', 433],
        ['gl', 34], ['gu', 35], ['mp', 36], ['pr', 37], ['vi', 838], ['ca', 39],
        ['st', 40], ['cv', 541], ['dm', 542], ['nl', 643], ['jm', 44], ['ws', 45],
        ['om', 346], ['vc', 547], ['tr', 448], ['bd', 49], ['lc', 450], ['nr', 951],
        ['no', 352], ['kn', 53], ['bh', 454], ['to', 555], ['fi', 656], ['id', 57],
        ['mu', 158], ['se', 59], ['tt', 60], ['my', 61], ['pa', 962], ['pw', 63],
        ['tv', 764], ['mh', 65], ['cl', 66], ['th', 467], ['gd', 368], ['ee', 69],
        ['ag', 70], ['tw', 1471], ['bb', 72], ['it', 73], ['mt', 74], ['vu', 75],
        ['sg', 576], ['cy', 77], ['lk', 78], ['km', 79], ['fj', 180], ['ru', 181],
        ['va', 82], ['sm', 83], ['kz', 84], ['az', 85], ['tj', 86], ['ls', 187],
        ['uz', 88], ['ma', 89], ['co', 90], ['tl', 91], ['tz', 92], ['ar', 393],
        ['sa', 194], ['pk', 95], ['ye', 96], ['ae', 97], ['ke', 698], ['pe', 99],
        ['do', 100], ['ht', 301], ['pg', 102], ['ao', 103], ['kh', 804],
        ['vn', 105], ['mz', 236], ['cr', 107], ['bj', 108], ['ng', 109],
        ['ir', 110], ['sv', 111], ['sl', 112], ['gw', 113], ['hr', 114],
        ['bz', 115], ['za', 116], ['cf', 117], ['sd', 618], ['cd', 119],
        ['kw', 120], ['de', 121], ['be', 122], ['ie', 123], ['kp', 124],
        ['kr', 125], ['gy', 126], ['hn', 127], ['mm', 128], ['ga', 129],
        ['gq', 130], ['ni', 131], ['lv', 132], ['ug', 133], ['mw', 134],
        ['am', 135], ['sx', 136], ['tm', 137], ['zm', 338], ['nc', 139],
        ['mr', 140], ['dz', 141], ['lt', 142], ['et', 143], ['er', 144],
        ['gh', 145], ['si', 146], ['gt', 147], ['ba', 148], ['jo', 149],
        ['sy', 150], ['mc', 151], ['al', 152], ['uy', 153], ['cnm', 154],
        ['mn', 155], ['rw', 156], ['so', 157], ['bo', 1158], ['cm', 159],
        ['cg', 160], ['eh', 161], ['rs', 162], ['me', 163], ['tg', 164],
        ['la', 165], ['af', 166], ['ua', 167], ['sk', 168], ['jk', 169],
        ['bg', 170], ['qa', 171], ['li', 372], ['at', 473], ['sz', 174],
        ['hu', 175], ['ro', 176], ['ne', 177], ['lu', 178], ['ad', 179],
        ['ci', 180], ['lr', 181], ['bn', 182], ['iq', 183], ['ge', 184],
        ['gm', 185], ['ch', 186], ['td', 187], ['kv', 188], ['lb', 189],
        ['dj', 190], ['bi', 191], ['sr', 192], ['il', 193], ['ml', 194],
        ['sn', 195], ['gn', 196], ['zw', 197], ['pl', 198], ['mk', 199],
        ['py', 200], ['by', 201], ['cz', 202], ['bf', 203], ['na', 204],
        ['ly', 205], ['tn', 206], ['bt', 207], ['md', 208], ['ss', 209],
        ['bw', 210], ['bs', 211], ['nz', 212], ['cu', 213], ['ec', 214],
        ['au', 215], ['ve', 216], ['sb', 217], ['mg', 218], ['is', 219],
        ['eg', 220], ['kg', 221], ['np', 222]
    ];

    // 創建圖表
    const chart = Highcharts.mapChart('mapcontainer', {
        chart: {
            map: topology
        },
        title: {
            text: '國家訪客'
        },
        subtitle: {
            text: '<a href="https://code.highcharts.com/mapdata/custom/world.topo.json"></a>'
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            min: 0,
            minColor: '#E6E6FA',  // 淡紫色
            maxColor: '#4B0082'   // 深紫色
        },
        series: [{
            data: data,
            name: '瀏覽量',
            states: {
                hover: {
                    color: '#FFFF99'  // 淺黃色
                }
            },
            dataLabels: {
                enabled: false
            }
        }]
    });

})();