import { gql } from '@apollo/client';

export const AUTH = gql`
    mutation GetToken($email: String! $uid: String! ) {
        authorizeUser(email: $email uid: $uid) {
            toReturn{
                token
                user{
                    firstName
                }
            }
        }
    }
`;

export const CREATE_COMPANY = gql`
    mutation CREATE_COMPANY(
        $email: String!
        $uid: String!
        $eventType: String!
        $firstName: String!
        $lastName: String!
        $corporationName: String
        $corporationId: ID
        $streetAddress: String
        $city: String
        $state: String
        $zipCode: String
        $phone: String!
        $country: String!
        $isCompany: Boolean!
        $isEmployee: Boolean!
        $notificationIsOn: Boolean
    ){
        createUser(
            email: $email
            uid: $uid
            firstName: $firstName
            lastName: $lastName
            corporationName: $corporationName
            corporationId: $corporationId
            streetAddress: $streetAddress
            city: $city
            state: $state
            zipCode: $zipCode
            country: $country
            isCompany: $isCompany
            isEmployee: $isEmployee
            notificationIsOn: $notificationIsOn
            phone: $phone
            eventType: $eventType
        ){
            toReturn{
                id
                firstName                
            }
        }
    }
`;


export const STRIPE_INTENT = gql`
    mutation PAYMENT($subCategoryName: ID!){
        payment(subCategoryName: $subCategoryName){
            clientSecret
        }
    }
`;

export const CREATE_ORDINARY_USER = gql`
    mutation CREATE_ORDINARY_USER(
        $email: String!
        $uid: String!
        $eventType: String!
        $firstName: String!
        $lastName: String!
        $phone: String!
        $country: String!
        $isCompany: Boolean!
        $isEmployee: Boolean!
    ){
        createUser(
        email: $email
        uid: $uid
        firstName: $firstName
        lastName: $lastName
        country: $country
        isCompany: $isCompany
        isEmployee: $isEmployee
        phone: $phone
        eventType: $eventType
        ){
        toReturn{
            id
            firstName
            phone
        }
        }
    }
`;

export const SIGNIN = gql`
    mutation SIGNIN(
        $email: String!
        $uid: String!
    ){
        authorizeToken(
        email: $email
        uid: $uid
        ){
        toReturn{
            token
            user{
            id
            }
        }
        }
    }
`;

export const CREATE_A_CATEGORY = gql`
    mutation CREATE_A_CATEGORY{
        category(
        email: "evolov@gmail.com"
        uid: "MtimDuxPFBMprxu2iaQ5nYWtX4g1"
        eventType: "create_category"
        categoryName: "vehicle"
        categoryImageUrl: "categoryImageUrl"
        ){
        toReturn{
            id
            categoryName
            categoryImage
        }
        }
    }
`;


export const CREATE_CAR_AD = gql`
    mutation CREATE_AD(
        $email: String!
        $eventType: String!
        $subCategoryName: String!
        $description: String
        $brand: String
        $model: String
        $fuel: String
        $transmission: String
        $driveTrain: String
        $condition: String
        $acceleration: String
        $interiorColor: String
        $exteriorColor: String
        $price: Float!
        $builtYear: Int
        $seats: Int
        $horsePower: Int
        $maxSpeed: Int
        $km: Int
    ){
        createAd(
            email: $email
            eventType: $eventType
            subCategoryName: $subCategoryName
            details:{
                price: $price
                description: $description
                builtYear: $builtYear
                brand: $brand
                model: $model
                seats: $seats
                fuel: $fuel
                transmission: $transmission
                driveTrain:$driveTrain
                condition: $condition
                horsePower: $horsePower
                maxSpeed: $maxSpeed
                acceleration: $acceleration
                interiorColor: $interiorColor
                exteriorColor: $exteriorColor
                km: $km
            }
        ){
            toReturn{
                details
                user{
                    id
                }
            }
        }
    }
`;
