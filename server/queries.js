import { gql } from "@apollo/client";

export const HOUSE_FILTER = gql`
    query HouseFilter(
        $subCategoryName: String
        $city: String
        $country: String
        $zip: String
        $bedrooms: Float
        $plotSize: Float
        $buildingSize: Float
        $minPrice: Float
        $maxPrice: Float
        $isActive: Boolean
        $builtYear: Float
        $renovatedYear: Float
        $floors: Float
        $kindergarten: Boolean
        $primarySchool: Boolean
        $secondarySchool: Boolean
        $highSchool: Boolean
        $university: Boolean
        $groceryStore: Boolean
        $shoppingCenter: Boolean
        $library: Boolean
        $cinema: Boolean
        $nightClub: Boolean
        $theater: Boolean
        $beach: Boolean
        $hiking: Boolean
        $dogPark: Boolean
        $gym: Boolean
        $carWash: Boolean
        $mosque: Boolean
        $church: Boolean
        $synagogue: Boolean
        $internet: Boolean
        $maintenance24Hrs: Boolean
        $pool: Boolean
        $garage: Boolean
        $fireplace: Boolean
        $dogKeepers: Boolean
        $dogsAllowed: Boolean
        $catsAllowed: Boolean
        $poolTable: Boolean
        $mediaRoom: Boolean
        $hotTub: Boolean
        $water: Boolean
        $electricity: Boolean
        $childFriendly: Boolean
        $carWashArea: Boolean
        $gymRoom: Boolean
        $airCondition: Boolean
        $oven: Boolean
        $refrigerator: Boolean
        $microwave: Boolean
    ){
        houseFilter(
            subCategory_SubCategoryName_Contains: $subCategoryName
            city: $city
            country: $country
            zip: $zip
            bedrooms: $bedrooms
            plotSize: $plotSize
            buildingSize: $buildingSize
            minPrice: $minPrice
            maxPrice: $maxPrice
            builtYear: $builtYear
            renovatedYear: $renovatedYear
            floors: $floors
            isActive: $isActive
            kindergarten: $kindergarten
            primarySchool: $primarySchool
            secondarySchool: $secondarySchool
            highSchool: $highSchool
            university: $university
            groceryStore: $groceryStore
            shoppingCenter: $shoppingCenter
            library: $library
            cinema: $cinema
            nightClub: $nightClub
            theater: $theater
            beach: $beach
            hiking: $hiking
            dogPark: $dogPark
            gym: $gym
            carWash: $carWash
            mosque: $mosque
            church: $church
            synagogue: $synagogue
            internet: $internet
            maintenance24Hrs: $maintenance24Hrs
            pool: $pool
            garage: $garage
            fireplace: $fireplace
            dogKeepers: $dogKeepers
            dogsAllowed: $dogsAllowed
            catsAllowed: $catsAllowed
            poolTable: $poolTable
            mediaRoom: $mediaRoom
            hotTub: $hotTub
            water: $water
            electricity: $electricity
            childFriendly: $childFriendly
            carWashArea: $carWashArea
            gymRoom: $gymRoom
            airCondition: $airCondition
            oven: $oven
            refrigerator: $refrigerator
            microwave: $microwave
            
        ){
            edges{
                node{
                    id
                    details
                    nearby
                    facilities
                }
            }
        }
    }
`;


export const ONE_AD = gql`
    query ONE_AD($id: ID!){
        oneAd(id: $id){
        id
        details
        facilities
        nearby
        user{
            isCompany
            firstName
            lastName
            isVerified
            isEmployee
            notificationIsOn
        }
        subCategory{
            subCategoryName
            subCategoryImage
        }
        }
    }
`




const bbb = gql`
query FILTER_ADS{
    houseFilter(
      # offset: 19
      first: 1
    ){
      edges{
        cursor
        node{
          id
          details
          nearby
          facilities
          user{
            id
            isAdmin
            isActive
            isCompany
            isEmployee
            firstName
            notificationIsOn
            phone
            userBio
            employee{
              employeePosition
              showEmployee
            }
            company{
              showEmployees
            }
          }
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;


export const VEHICLE_FILTER = gql`
  query VEHICLE_FILTER(
    $isActive: Boolean
    $subCategory_SubCategoryName_Contains: String
    $brand: String
    $model: String
    $fuel: String
    $transmission: String
    $driveTrain: String
    $condition: String
    $acceleration: String
    $interiorColor: String
    $exteriorColor: String
    $km: Float
    $maxSpeed: Float
    $horsePower: Float
    $seats: Float
    $maxPrice: Float
    $minPrice: Float
    $first: Int
    $after: String
  ){
    vehicleFilter(
      after: $after
      first: $first
      isActive: $isActive
      subCategory_SubCategoryName_Contains: $subCategory_SubCategoryName_Contains
      minPrice: $minPrice
      maxPrice: $maxPrice
      brand: $brand
      model: $model
      fuel: $fuel
      transmission: $transmission
      driveTrain: $driveTrain
      condition: $condition
      acceleration: $acceleration
      interiorColor: $interiorColor
      exteriorColor: $exteriorColor
      seats: $seats
      horsePower: $horsePower
      maxSpeed: $maxSpeed
      km: $km
    ){
      edges{
        node{
          id
          details
          subCategory {
            subCategoryName
          }
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;


