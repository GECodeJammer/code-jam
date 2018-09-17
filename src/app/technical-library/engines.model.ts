interface IEngineGroup {
  title: string;
  aircraft: IEngine[];
}

interface IEngine {
  id: number;
  title: string;
  description: string;
  detailDescription?: string;
  imageRef: string;
  tags: string[];
}

export const engines: IEngineGroup[] = [
  {
    title: 'TWIN-AISLE AIRCRAFT',
    aircraft: [
      {
        id: 1,
        title: 'GE 90',
        description: `Specifically designed for the Boeing 777, the GE90 is the world's most powerful turbofan.`,
        detailDescription: `CMCs in the combustor and high-pressure turbine have twice the strength and one-third the weight of metal. The
        compressor is designed with 3D aerodynamics and its first five stages are blisks, combined bladed-disk. The
        combustor is lean burning for greater efficiency and 30% NOx margin to CAEP/8. The compressor and high pressure
        turbine are made from powdered metal.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-ge90_1.jpg',
        tags: ['GE90', '777', 'turbofan']
      },
      {
        id: 2,
        title: 'GE9X',
        description: `Purpose-designed for the Boeing 777X, the GE9X will be the most fuel-efficient engine GE has ever produced.`,
        detailDescription: `CMCs in the combustor and high-pressure turbine have twice the strength and one-third the weight of metal. The
        compressor is designed with 3D aerodynamics and its first five stages are blisks, combined bladed-disk. The
        combustor is lean burning for greater efficiency and 30% NOx margin to CAEP/8. The compressor and high pressure
        turbine are made from powdered metal.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-ge9x_2.jpg',
        tags: ['777x', 'GE9x']
      },
      {
        id: 3,
        title: 'GENX',
        description: `Powering the Boeing 787 Dreamliner and 747-8, the GEnx is the fastest-selling engine in GE Aviation history.`,
        detailDescription: `CMCs in the combustor and high-pressure turbine have twice the strength and one-third the weight of metal. The
        compressor is designed with 3D aerodynamics and its first five stages are blisks, combined bladed-disk. The
        combustor is lean burning for greater efficiency and 30% NOx margin to CAEP/8. The compressor and high pressure
        turbine are made from powdered metal.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-genx_1.jpg',
        tags: []
      },
      {
        id: 4,
        title: 'GP7200',
        description: `The GP7200 engine is produced by a 50/50 Joint Venture between GE and Pratt & Whitney.
        It is the most reliable and most fuel efficient engine available for the Airbus A380`,
        detailDescription: `CMCs in the combustor and high-pressure turbine have twice the strength and one-third the weight of metal. The
        compressor is designed with 3D aerodynamics and its first five stages are blisks, combined bladed-disk. The
        combustor is lean burning for greater efficiency and 30% NOx margin to CAEP/8. The compressor and high pressure
        turbine are made from powdered metal.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-gp7000.jpg',
        tags: []
      },
      {
        id: 5,
        title: 'CF6',
        description: `For 45 years, the CF6 family of engines have been the cornerstone of the best widebody,
        long-range commercial aircraft in the industry.`,
        detailDescription: `CMCs in the combustor and high-pressure turbine have twice the strength and one-third the weight of metal. The
        compressor is designed with 3D aerodynamics and its first five stages are blisks, combined bladed-disk. The
        combustor is lean burning for greater efficiency and 30% NOx margin to CAEP/8. The compressor and high pressure
        turbine are made from powdered metal.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-cf6.jpg',
        tags: []
      },
    ]
  },
  {
    title: 'SINGLE-AISLE AIRCRAFT',
    aircraft: [
      {
        id: 6,
        title: 'CFM56',
        description: `The CFM56 is produced by a 50/50 Joint Venture between GE and Safran Aircraft Engines.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-cfm56.jpg',
        tags: ['GE90', '777', 'turbofan']
      },
      {
        id: 7,
        title: 'LEAP',
        description: `A worthy successor to the CFM56, the new LEAP engine will bring double-digit improvements
          in fuel efficiency, emissions and noise.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-leap.jpg',
        tags: ['777x', 'GE9x']
      }
    ]
  },
  {
    title: 'REGIONAL AIRCRAFT',
    aircraft: [
      {
        id: 8,
        title: 'CF34',
        description: `The CF34 engine helped launch the era of regional jets. More than 135 million flight hours
          and 110 million flight cycles later.`,
        imageRef: 'https://www.geaviation.com/sites/default/files/thumb-cf34_0.jpg',
        tags: ['GE90', '777', 'turbofan']
      }
    ]
  },
];

export function getAllEngines(): IEngine[] {
  return engines.reduce((previous, current) => {
    return [
      ...previous,
      ...current.aircraft
    ];
  }, []);
}

export function getEngineById(id: number): IEngine {
  const allEngines = getAllEngines();
  return allEngines.find(engine => engine.id === id);
}
