import { BoxItemType, ProductS6Type, ProductType } from "@/types";


export const BOX_LIST:BoxItemType[] = [
    {
        image: 'main-illust-02-1',
        title: '인체의 NAD+ 균형 유지를 위해',
        text:'인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+ 는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가 들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체 건강 상태도 나빠지기도 합니다.',
        color:'white'
    },
    {
        image: 'main-illust-02-2',
        title: '인체 내의 주요 세포 에너지원',
        text:'니코틴아마이드 모노뉴클레오타이드(NMN)는 인체 내의 주요 세포 에너지원 중에 하나입니다. 감소된 NAD+ 를 보충제 역할을 함으로써 노화를 늦추는 효과가 있으며, 건강을 향상시키는데 도움이 됩니다.',
        color:'blue'
    },
    {
        image: 'main-illust-02-3',
        title: '젊음 유지 및 노화 억제에 탁월한 효과',
        text:'NMN은 노화를 되돌릴 뿐만 아니라 관련된 질병을 억제하는데 효과적입니다. 연구를 진행한 결과, NMN가 노화로 인한 세포 손상, 신경 퇴행, 심장기능 악화 등의 문제 개선과 젊음을 유지하는데 효과가 있다는 것을 발견했습니다.',
        color:'white'
    },
]




export const PRODUCT_LIST_S5:ProductType[] = [
    {
        id:1,
        image: 'main-illust-05-1',
        name:'노화 억제 및 세포 활성화',
        description: 'NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.'
    },
    {
        id:2,
        image:'main-illust-05-2',
        name:'활성 산소 중의 미토콘드리아 생성 및 생체 에너지 보호',
        description: 'NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.'
    },
    {
        id:3,
        image:'main-illust-05-3',
        name:'혈액순환 촉진 및 심장 기능 개선 기능',
        description:'연구 결과, 신체 국소에 빈혈을 예방하는 효과가 있다고 합니다. SIRT1을 활성화함으로써 심장을 보호하고 혈액순환을 촉진시킵니다.'
    },
    {
        id:4,
        image:'main-illust-05-4',
        name:'세포 에너지 증가',
        description: '미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.'
    },
    {
        id:5,
        image:'main-illust-05-5',
        name:'세포 에너지 증가',
        description:'미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.'
    },
    {
        id:6,
        image: 'main-illust-05-1',
        name:'노화 억제 및 세포 활성화',
        description: 'NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.'
    },
    {
        id:7,
        image:'main-illust-05-2',
        name:'활성 산소 중의 미토콘드리아 생성 및 생체 에너지 보호',
        description: 'NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.'
    },
]

export const CATEGORIES = [
    {
        id:1,
        name: 'NMN'
    },
    {
        id:2,
        name: '트렌스-레스베라트롤'
    },
    {
        id:3,
        name: '비타민 K2+D3'
    },
    {
        id:4,
        name: '아피제닌'
    },
    {
        id:5,
        name: '피세틴'
    },
    {
        id:6,
        name: '케르세틴'
    },
    {
        id:7,
        name: 'Coq10'
    },
    {
        id:8,
        name: 'Tmg'
    },
    {
        id:9,
        name: 'Lutein'
    },
    {
        id:10,
        name: 'MSM'
    },
]


export const PRODUCT_LIST_S6: ProductS6Type[] = [
    // Category 1: NMN
    {
      id: 1,
      image: 'product-img-box',
      name: 'NMN 파우더',
      description: '강력한 NMN 성분이 함유된 제품으로 세포 재생을 촉진합니다.',
      categoryId: 1,
      originalPrice: 60000,
      discountedPrice: 56900,  
    },
    {
      id: 2,
      image: 'product-img-box',
      name: 'NMN 캡슐',
      description: '세포 건강을 위한 NMN 캡슐 형태의 제품입니다.',
      categoryId: 1,
      originalPrice: 50000,
      discountedPrice: 48000,  
    },
    {
      id: 3,
      image: 'product-img-box',
      name: 'NMN 정제',
      description: 'NMN 성분이 들어있는 정제 제품으로, 노화 방지 효과를 제공합니다.',
      categoryId: 1,
      originalPrice: 53000,
      discountedPrice: 51000,  
    },
  
    // Category 2: 트렌스-레스베라트롤
    {
      id: 4,
      image: 'product-img-box',
      name: '트렌스-레스베라트롤 파우더',
      description: '강력한 항산화 성분을 제공하는 트렌스-레스베라트롤 파우더입니다.',
      categoryId: 2,
      originalPrice: 61000,
      discountedPrice: 59000,  
    },
    {
      id: 5,
      image: 'product-img-box',
      name: '트렌스-레스베라트롤 캡슐',
      description: '트렌스-레스베라트롤을 편리하게 섭취할 수 있는 캡슐 제품입니다.',
      categoryId: 2,
      originalPrice: 54000,
      discountedPrice: 52000,  
    },
    {
      id: 6,
      image: 'product-img-box',
      name: '트렌스-레스베라트롤 정제',
      description: '정제 형태로 제공되는 트렌스-레스베라트롤 제품입니다.',
      categoryId: 2,
      originalPrice: 58000,
      discountedPrice: 56000,  
    },
  
    // Category 3: 비타민 K2+D3
    {
      id: 7,
      image: 'product-img-box',
      name: '비타민 K2+D3 파우더',
      description: 'K2와 D3가 결합된 파우더 형태의 제품으로, 뼈 건강을 지원합니다.',
      categoryId: 3,
      originalPrice: 62000,
      discountedPrice: 60000,  
    },
    {
      id: 8,
      image: 'product-img-box',
      name: '비타민 K2+D3 캡슐',
      description: '비타민 K2와 D3를 포함한 캡슐 형태의 제품입니다.',
      categoryId: 3,
      originalPrice: 55000,
      discountedPrice: 53000,  
    },
    {
      id: 9,
      image: 'product-img-box',
      name: '비타민 K2+D3 정제',
      description: '비타민 K2와 D3 성분을 섭취할 수 있는 정제 제품입니다.',
      categoryId: 3,
      originalPrice: 57000,
      discountedPrice: 55000,  
    },
  
    // Category 4: 아피제닌
    {
      id: 10,
      image: 'product-img-box',
      name: '아피제닌 파우더',
      description: '세포 재생을 촉진하는 아피제닌 성분의 파우더입니다.',
      categoryId: 4,
      originalPrice: 63000,
      discountedPrice: 61000,  
    },
    {
      id: 11,
      image: 'product-img-box',
      name: '아피제닌 캡슐',
      description: '세포 건강을 위한 아피제닌 캡슐 형태의 제품입니다.',
      categoryId: 4,
      originalPrice: 54000,
      discountedPrice: 52000,  
    },
    {
      id: 12,
      image: 'product-img-box',
      name: '아피제닌 정제',
      description: '세포 노화를 지연시키는 아피제닌 정제 제품입니다.',
      categoryId: 4,
      originalPrice: 58000,
      discountedPrice: 56000,  
    },
  
    // Category 5: 피세틴
    {
      id: 13,
      image: 'product-img-box',
      name: '피세틴 파우더',
      description: '피세틴 성분으로 항산화 효과를 제공하는 파우더 제품입니다.',
      categoryId: 5,
      originalPrice: 64000,
      discountedPrice: 62000,  
    },
    {
      id: 14,
      image: 'product-img-box',
      name: '피세틴 캡슐',
      description: '편리하게 섭취 가능한 피세틴 캡슐 제품입니다.',
      categoryId: 5,
      originalPrice: 55000,
      discountedPrice: 53000,  
    },
    {
      id: 15,
      image: 'product-img-box',
      name: '피세틴 정제',
      description: '항산화 효과가 있는 피세틴 정제 제품입니다.',
      categoryId: 5,
      originalPrice: 58000,
      discountedPrice: 56000,  
    },
  ];
  