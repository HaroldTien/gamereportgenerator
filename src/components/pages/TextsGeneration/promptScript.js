
const PromptOptions =  {
    selectedGame: {
        'lol': {
            'en': 'League of Legends',
            'zh-TW': '英雄聯盟',
            'zh-CN': '英雄联盟', 
            'ja': 'リーグ・オブ・レジェンド',
            'ko': '리그 오브 레전드'
        },
        'pubg': {
            'en': 'PUBG',
            'zh-TW': '絕地求生',                     
            'zh-CN': '绝地求生',
            'ja': 'PUBG バトルグラウンド',
            'ko': '배틀그라운드'
        }
    },

    reportType: {
        'planning': {
            'en': 'a planning report',
            'zh-TW': '計畫報告',
            'zh-CN': '计划报告',
            'ja': '計画レポート',
            'ko': '계획 보고서'
        },
        'concluded': {
            'en': 'a concluded report',
            'zh-TW': '總結報告',
            'zh-CN': '总结报告', 
            'ja': '結論レポート',
            'ko': '결론 보고서'
        }
    },
    audience: {
        'gf': {
            'en': 'girl friend',
            'zh-TW': '女朋友',
            'zh-CN': '女朋友',
            'ja': '彼女',
            'ko': '여자친구'
        },
        'dad': {
            'en': 'dad',
            'zh-TW': '爸爸',
            'zh-CN': '爸爸',
            'ja': 'お父さん',
            'ko': '아빠'
        },
        'mom': {
            'en': 'mom',
            'zh-TW': '媽媽',
            'zh-CN': '妈妈',
            'ja': 'お母さん',
            'ko': '엄마'
        },
        'coach': {
            'en': 'coach',
            'zh-TW': '教練',
            'zh-CN': '教练',
            'ja': 'コーチ',
            'ko': '코치'
        },
        'classmate': {
            'en': 'classmate',
            'zh-TW': '同學',
            'zh-CN': '同学',
            'ja': 'クラスメート',
            'ko': '급우'
        },
        'self': {
            'en': 'self',
            'zh-TW': '自己',
            'zh-CN': '自己',
            'ja': '自分',
            'ko': '자신'
        }
    },
    purpose: {
        'askPermission': {
            'en': 'ask permission for a game',
            'zh-TW': '請求玩遊戲的許可',
            'zh-CN': '请求玩游戏的许可',
            'ja': 'ゲームの許可を求める',
            'ko': '게임 허가 요청'
        },
        'sharePlaying': {
            'en': 'share playing experience',
            'zh-TW': '分享遊戲體驗',
            'zh-CN': '分享游戏体验',
            'ja': 'プレイ経験を共有する',
            'ko': '게임 경험 공유'
        },
        'shareStrategy': {
            'en': 'share strategy',
            'zh-TW': '分享策略',
            'zh-CN': '分享策略',
            'ja': '戦略を共有する',
            'ko': '전략 공유'
        },
        'askToPlay': {
            'en': 'invite to play together',
            'zh-TW': '邀請一起玩',
            'zh-CN': '邀请一起玩',
            'ja': '一緒にプレイする誘い',
            'ko': '함께 플레이 요청'
        }
    },
}


const Script =(gameDetails,reportType,audience,customNeeds,selectedGame,outputLanguage) => {

    const languageMap={
        'en': 'English',
        'zh-TW': '繁體中文',
        'zh-CN': '簡體中文',
        'ja': 'Japanese',
        'ko': 'Korean'
    }
    console.log(PromptOptions.audience[audience.person][outputLanguage]);
    let promptScript='';
    console.log(gameDetails.startTime);
    switch(outputLanguage){
        case 'en':
            promptScript = `->Using ${languageMap[outputLanguage]} to write a game report for my ${PromptOptions.audience[audience.person][outputLanguage]},
            The report type is ${PromptOptions.reportType[reportType][outputLanguage]},
            The game I played is: ${PromptOptions.selectedGame[selectedGame][outputLanguage]},
            My game ID is: ${gameDetails.gameId},
            The date I played is: ${gameDetails.gameDate},
            The game start time is: ${gameDetails.startTime},
            The game duration is: ${gameDetails.duration},
            The purpose of this report is: ${PromptOptions.purpose[audience.purpose][outputLanguage]},
            My requirements to the generated report are: ${customNeeds}<-`;
            return promptScript;
        case 'zh-TW':
            promptScript = `->全程使用${languageMap[outputLanguage]}幫我寫一份遊戲的報告給我的${PromptOptions.audience[audience.person][outputLanguage]}，
            報告的類型是遊戲的${PromptOptions.reportType[reportType][outputLanguage]}，
            我玩的遊戲是:${PromptOptions.selectedGame[selectedGame][outputLanguage]}，
            我的遊戲ID是:${gameDetails.gameId}，
            玩遊戲的日期是:${gameDetails.gameDate}，
            遊戲的開始時間是:${gameDetails.startTime}，
            遊戲的持續時間是:${gameDetails.duration}，
            我寫這篇報告的目的是:${PromptOptions.purpose[audience.purpose][outputLanguage]}，
            我的需求有:${customNeeds}，請不要使用繁體中文以外的語言<-`;
            return promptScript;
        case 'zh-CN':
            promptScript = `->全程使用${languageMap[outputLanguage]}幫我寫一份遊戲的報告給我的${PromptOptions.audience[audience.person][outputLanguage]}，
            报告的类型是游戏的${PromptOptions.reportType[reportType][outputLanguage]}，
            我玩的游戏是:${PromptOptions.selectedGame[selectedGame][outputLanguage]}，
            我的游戏ID是:${gameDetails.gameId}，
            玩游戏的日期是:${gameDetails.gameDate}，
            游戏的时间是:${gameDetails.startTime}，
            游戏持续的时间是:${gameDetails.duration}，
            我写这篇报告的目的是:${PromptOptions.purpose[audience.purpose][outputLanguage]}，
            我的需求有:${customNeeds}，請不要使用简体中文以外的語言<-`;
            return promptScript;
        case 'ja':
            promptScript = `->${languageMap[outputLanguage]}を使用して、${PromptOptions.audience[audience.person][outputLanguage]}向けのゲームレポートを作成してください。
            レポートの種類は${PromptOptions.reportType[reportType][languageMap[outputLanguage]]}です。
            プレイしたゲームは${PromptOptions.selectedGame[selectedGame][languageMap[outputLanguage]]}です。
            ゲームIDは${gameDetails.gameId}です。
            プレイ日は${gameDetails.gameDate}です。
            ゲーム時間は${gameDetails.startTime}です。
            ゲーム持続時間は${gameDetails.duration}です。
            このレポートの目的は${PromptOptions.purpose[audience.purpose][outputLanguage]}です。
            要件は${customNeeds}です。日本語以外の言語は使用しないでください。<-`;
            return promptScript;
        case 'ko':
            promptScript = `->${outputLanguage}를 사용하여 ${PromptOptions.audience[audience.person][outputLanguage]}에게 보내는 게임 보고서를 작성해주세요.
            보고서 유형은 ${PromptOptions.reportType[reportType][outputLanguage]}입니다.
            플레이한 게임은 ${PromptOptions.selectedGame[selectedGame][outputLanguage]}입니다.
            게임 ID는 ${gameDetails.gameId}입니다.
            플레이 날짜는 ${gameDetails.gameDate}입니다.
            게임 시간은 ${gameDetails.startTime}입니다.
            게임 지속 시간은 ${gameDetails.duration}입니다.
            이 보고서의 목적은 ${PromptOptions.purpose[audience.purpose][outputLanguage]}입니다.
            요구사항은 ${customNeeds}입니다. 한국어 이외의 언어는 사용하지 마십시오.<-`;
            return promptScript;
    }
}

export default Script;
