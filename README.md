# DisasterResponse.AI

A decentralized, autonomous disaster response system leveraging AI agents, drones, and blockchain technology.

## Project Overview

In disasters where traditional communication and coordination fail, our project introduces a decentralized, autonomous disaster response system. We deploy a network of AI agents—global, regional, and local—that continuously monitor environments for signs of disasters. Upon detecting an event, these agents collaborate through a consensus mechanism to confirm the disaster, collect data, and coordinate responses.

## Key Features

- **Autonomous Agents**: AI agents detect and validate disasters, working seamlessly with human responders
- **Sensor Integration**: Real-time data collection from IoT sensors and autonomous drones
- **Consensus System**: AI agents reach consensus on disaster detection and response strategies
- **Resource Coordination**: Automated coordination of emergency resources and rescue efforts

## Technology Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma
- PostgreSQL
- Google Cloud Storage
- Clerk Authentication

## Getting Started

### 1. Start the Database

```bash
# Start the database
docker-compose up -d

# To stop the database
docker-compose down

# To view database logs
docker-compose logs -f postgres
```

### 2. Environment Setup

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/disaster_response_db?schema=public"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Google Cloud Storage
GOOGLE_PRIVATE_KEY=your_base64_encoded_credentials
GOOGLE_CLOUD_BUCKET=your_bucket_name
```

### 3. Run the Development Server

```bash
# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Research Participation

We're actively seeking insights from disaster response professionals. If you have experience in this field, please consider:

1. Scheduling a research interview: [Calendar Link](https://calendly.com/cdirks4/new-meeting)
2. Emailing us at: dirks.connor4@gmail.com

## Team

- **Leandra T.** - Research Lead
- **Jonathan H.** - Technology Strategy
- **Narasimha Teja Reddy** - Technical Lead
- **Connor Dirks** - Software Engineer

## Awards

- ETHGlobal SF Top 10 Finalist
- EasyA x Polkadot Harvard Hackathon Winner

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
