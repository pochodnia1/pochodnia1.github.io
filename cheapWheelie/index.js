function downloadFiles(element){
    const link = document.createElement('a');
    switch (element.id){
        case "DownloadButton": {
            link.href = 'Versions/1.6.2/CheapWheelie-1_0_5.apk';
            link.download = 'CheapWheelie-1_6_2.apk'
            break
        }
        case "v1": {
            link.href = 'Versions/1.0.1/CheapWheelie-1_0_1.apk';
            link.download = 'CheapWheelie-1_0_1.apk'
            break;
        }
        case "v2": {
            link.href = 'Versions/1.0.2/CheapWheelie-1_0_2.apk';
            link.download = 'CheapWheelie-1_0_2.apk'
            break
        }
        case "v3": {
            link.href = 'Versions/1.0.3/CheapWheelie-1_0_4.apk';
            link.download = 'CheapWheelie-1_0_3.apk'
            break
        }
        case "v4": {
            link.href = 'Versions/1.1.0/CheapWheelie-1_0_2.apk';
            link.download = 'CheapWheelie-1_1_0.apk'
            break
        }
        case "v5": {
            link.href = 'Versions/1.2.0/CheapWheelie-1_0_3.apk';
            link.download = 'CheapWheelie-1_2_0.apk'
            break
        }
        case "v6": {
            link.href = 'Versions/1.2.1/CheapWheelie-1_0_3.apk';
            link.download = 'CheapWheelie-1_2_1.apk'
            break
        }
        case "v7": {
            link.href = 'Versions/1.2.2/CheapWheelie-1_0_3.apk';
            link.download = 'CheapWheelie-1_2_2.apk'
            break
        }
        case "v8": {
            link.href = 'Versions/1.3.0/CheapWheelie-1_0_3.apk';
            link.download = 'CheapWheelie-1_3_0.apk'
            break
        }
        case "v9": {
            link.href = 'Versions/1.3.1/CheapWheelie-1_0_3.apk';
            link.download = 'CheapWheelie-1_3_1.apk'
            break
        }
        case "v10": {
            link.href = 'Versions/1.4.0/CheapWheelie-1_0_4.apk';
            link.download = 'CheapWheelie-1_4_0.apk'
            break
        }
        case "v11": {
            link.href = 'Versions/1.5.0/CheapWheelie-1_0_4.apk';
            link.download = 'CheapWheelie-1_5_0.apk'
            break
        }
        case "v12": {
            link.href = 'Versions/1.5.1/CheapWheelie-1_0_4.apk';
            link.download = 'CheapWheelie-1_5_1.apk'
            break
        }
        case "v13": {
            link.href = 'Versions/1.6.1/CheapWheelie-1_0_5.apk';
            link.download = 'CheapWheelie-1_6_1.apk'
            break
        }  
        case "v14": {
            link.href = 'Versions/1.6.2/CheapWheelie-1_0_5.apk';
            link.download = 'CheapWheelie-1_6_2.apk'
            break
        }
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
