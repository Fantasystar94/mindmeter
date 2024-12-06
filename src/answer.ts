interface Answer {
    title: string;
    content: string;
}

class answerRender {
    private answer: Answer[] = [
        { title: '감정 대마왕', content: '당신은 감정을 중요시하는 사람인 것 같아요! 문제를 해결하려고 하긴 하지만, 상대방의 감정에 깊이 공감하고 이해하려는 경향이 더 크네요. 이 정도 점수면 감정보다 해결책을 먼저 떠올리기보다는 감정적인 측면을 먼저 고려하는 타입일 거예요. "그래, 그럴 수 있지"라는 말이 더 자연스러운 사람일 듯!😌' },
        { title: '감성과 이성의 줄타기 선수', content:'당신은 감정도 중요하지만, 해결책을 찾는 걸 좋아하는 사람 같아요! 감정을 인정하되, "그래, 이제 어떻게 할까?"라는 방식으로 문제 해결을 시도하는 경향이 있어요. 상황에 따라 감정적 접근과 논리적 접근을 적절하게 조절할 수 있는 균형 잡힌 성향이에요. "감정도 중요하지만, 이걸 어떻게 풀 수 있을까?" 이런 마음가짐을 가진 사람인 듯!🤔💭' },
        { title: '해결사 마인드 소유자', content: '여기까지 오면 감정을 다루기보다는 해결책을 우선시하는 경향이 강해요! "이 문제는 어떻게 해결할까?"라는 생각이 더 많이 떠오를 때가 많을 거예요. 친구가 힘들어할 때도 "그럼 해결책은 뭐가 있을까?"라고 말하는 편일 것 같네요. 때로는 지나치게 논리적일 수 있지만, 그게 더 효율적인 방법이라고 믿는 타입!💼🧠' },
        { title: '100% 해결사 DNA 보유자', content: '당신은 정말 T 타입이 확고한 사람입니다! 감정을 논하기보다는 문제의 원인과 해결책을 먼저 찾아내려 하는 스타일이에요. 친구가 우울해도 "이걸 어떻게 해결할까?"가 먼저 떠오르고, 감정적으로 폭발하는 상황도 "왜 이렇게 됐을까?"라고 분석하려는 경향이 있어요. 감정보다 논리와 해결책을 중시하는 사람이죠! "감정은 나중에 다루자, 지금은 문제 해결!"이죠!🧑‍💼🔍' }
    ];
    private answerDom: Element | null;
    private score: number;

    constructor(score: number) {
        this.score = score;
        this.answerDom = document.querySelector('.answerWrap');
        this.init();
    }

    private init(): void {
        const resultIndex = this.calcul(this.score);
        if (resultIndex !== undefined && this.answerDom) {
            const answer = this.answer[resultIndex];
            const titleElement = this.answerDom.querySelector('.title');
            const contentElement = this.answerDom.querySelector('.content');

            if (titleElement && contentElement) {
                titleElement.innerHTML = answer.title;
                contentElement.innerHTML = answer.content;
            } else {
                console.error('Title or content element is missing');
            }
        } else {
            console.error('Invalid score value or answerDom is null');
        }
    }

    private calcul(score: number): number {
        if (score >= 0 && score <= 250) return 0;
        if (score >= 251 && score <= 500) return 1;
        if (score >= 501 && score <= 750) return 2;
        if (score >= 751 && score <= 1000) return 3;
        return 0; // 기본값
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const scoreParam = urlParams.get('counting');
    const score = scoreParam && !isNaN(Number(scoreParam)) ? Number(scoreParam) : 0;
    new answerRender(score);

    const copyUrl = async (): Promise<void> => {
        try {
            const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
            document.querySelector("#copyBtn")?.classList.toggle('on');
            await navigator.clipboard.writeText(currentUrl); // 클립보드에 복사
            setTimeout(()=>{
                document.querySelector("#copyBtn")?.classList.toggle('on');
            },500);
        } catch (err) {
            console.error('URL 복사 중 오류 발생:', err);
            alert('URL을 복사할 수 없습니다. 브라우저가 지원하지 않을 수 있습니다.');
        }
    };
    document.querySelector('#copyBtn')?.addEventListener('click', copyUrl);

});

